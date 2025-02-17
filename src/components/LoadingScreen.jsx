import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useProject } from '../context/ProjectContext';

export default function LoadingScreen({ onComplete }) {
    const { updateProjectData } = useProject(); // 전역 상태로 프로젝트 데이터 사용
    const [progress, setProgress] = useState(0);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [startTime] = useState(Date.now());
    const [projectList] = useState(['PJ', 'Beanery', 'vinefactory']);

    useEffect(() => {
        let assetsToLoad = 1;
        let loaded = 0;

        setLoadingMessage('폰트 가져오는 중...');
        document.fonts.ready.then(() => {
            loaded += 1;
            updateProgress();
            setLoadingMessage('리소스 가져오는 중...');
        });

        // 📌 Performance API로 리소스 개수 측정
        const resources = performance.getEntriesByType('resource');
        assetsToLoad += resources.length;

        // 프로젝트 데이터 로딩
        assetsToLoad += projectList.length;
        const loadProjectData = async () => {
            setLoadingMessage('프로젝트 가져오는 중...');
            try {
                const dataPromises = projectList.map((project) =>
                    fetch(`/portfolio/data/${project}.json`)
                        .then((res) => res.json())
                        .then((jsonData) => {
                            loaded += 1;

                            return { [project]: jsonData };
                        })
                );

                const data = await Promise.all(dataPromises);

                const projectData = data.reduce((acc, item) => {
                    return { ...acc, ...item };
                }, {});

                console.log(projectData);

                updateProjectData(projectData);
            } catch (error) {
                console.error('Error loading project data:', error);
            }
        };

        loadProjectData();

        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach(() => {
                loaded += 1;
                updateProgress();
            });
        });
        observer.observe({ type: 'resource', buffered: true });

        let targetProgress = 0;

        function updateProgress() {
            loaded = Math.min(loaded, assetsToLoad);
            targetProgress = Math.floor((loaded / assetsToLoad) * 100);

            animateProgress();

            if (loaded === assetsToLoad) {
                observer.disconnect();
                const elapsedTime = Date.now() - startTime;
                const minLoadingTime = 500;
                const remainingTime = Math.max(minLoadingTime - elapsedTime, 0);

                setTimeout(() => {
                    targetProgress = 100;
                    animateProgress();

                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(() => {
                            setIsLoadingComplete(true);
                        }, 1000);
                    }, 500);
                }, remainingTime);
            }
        }

        function animateProgress() {
            if (progress >= targetProgress) return;

            // 매 10ms마다 한 번씩 상태 업데이트
            setTimeout(() => {
                setProgress((prev) => {
                    const next = prev + 1;
                    return next <= targetProgress ? next : targetProgress;
                });
                requestAnimationFrame(animateProgress); // 다음 프레임 요청
            }, 10); // 10ms 간격으로 상태 업데이트
        }

        return () => observer.disconnect();
    }, [startTime, projectList]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                if (isLoadingComplete) {
                    onComplete();
                }
            }}
        >
            {!isLoadingComplete && (
                <LoadingContainer
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <Heading>
                        <First initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            m
                        </First>
                        <Second
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Portfolio
                        </Second>
                    </Heading>
                    <ProgressBar>
                        <ProgressFill
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: 'easeInOut', duration: 0.01 }}
                        />
                    </ProgressBar>
                    <ProgressText>{progress}%</ProgressText>

                    <TextBox>
                        {!isComplete && (
                            <motion.div
                                key="loadingMessage"
                                initial={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <LoadingMessage isComplete={isComplete}>{loadingMessage}</LoadingMessage>
                            </motion.div>
                        )}

                        {isComplete && (
                            <motion.div
                                key="loadingComplete"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <LoadingMessage isComplete={isComplete}>Complete</LoadingMessage>
                            </motion.div>
                        )}
                    </TextBox>
                </LoadingContainer>
            )}
        </AnimatePresence>
    );
}

const LoadingContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.title};
    z-index: 999;
    box-shadow: 0 0 2px black;
`;

const ProgressBar = styled.div`
    width: 250px;
    height: 5px;
    background: ${({ theme }) => theme.box};
    border-radius: 999px;
    overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.title};
`;

const ProgressText = styled(motion.p)`
    font-size: 18px;
    margin: 20px 0;
`;

const LoadingMessage = styled(motion.p)`
    font-size: 16px;
    color: ${({ theme }) => theme.content};
    font-weight: normal;
`;

const Heading = styled.h1`
    display: flex;
    gap: 5px;
    font-size: 3rem;
    align-items: end;
    margin-bottom: 50px;
    font-weight: 400;
`;

// "m" 텍스트 스타일
const First = styled(motion.div)`
    opacity: 1;
    text-transform: uppercase;
`;

// "Portfolio" 텍스트 스타일
const Second = styled(motion.div)`
    opacity: 0;
    font-size: 2rem;
    transform: translateX(-20px);
`;

const TextBox = styled.div`
    overflow: hidden;
    position: relative;
    margin: 10px 0;
`;
