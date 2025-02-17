import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PJIMAGE from '../assets/PJ-image.png';
import BIMAGE from '../assets/Beanery-image.png';
import VIMAGE from '../assets/vinefactory-image.png';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: capitalize;
    word-wrap: break-word;
    word-break: keep-all;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const About = styled(motion.div)`
    color: ${({ theme }) => theme.title};
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    background-color: inherit;
    position: sticky;
    top: 100px;
    z-index: -1;
    margin-top: 30vh;
    text-transform: uppercase;
    font-size: 6rem;
    height: 100vh;

    .text-border {
        color: ${({ theme }) => theme.background};
        -webkit-text-stroke: 1px ${({ theme }) => theme.textBorder.border};
        font-weight: 500;
    }

    .name {
        font-size: 1.2rem;
        color: rgb(148, 148, 148);
        font-weight: 300;
        letter-spacing: 5px;
        padding-bottom: 10px;
    }

    @media (max-width: 1024px) {
        font-size: 5rem;
    }

    @media (max-width: 768px) {
        top: 180px;
    }

    @media (max-width: 480px) {
        font-size: 3.5rem;
        padding-top: 50px;
    }
`;

const FirstContent = styled(motion.div)`
    padding: 10px;
    margin-top: 20vh;
    background-color: ${({ theme }) => theme.background};
    border-radius: 40px;
    position: relative;
    transition: all 0.3s ease-in-out;

    .title-image {
        min-width: 350px;
        min-height: 400px;
        background-color: gray;
        border-radius: 30px;

        @media (max-width: 480px) {
            min-width: 250px;
            min-height: 300px;
        }
    }

    .social {
        ${({ theme }) => theme.background};
        position: absolute;
        bottom: 30px;
        right: 30px;
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: rgba(227, 227, 227, 0.3);
        backdrop-filter: blur(10px);
        border-radius: 999px;
        padding: 5px;

        li {
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 999px;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

const Intro = styled(motion.div)`
    margin: 100px 0;
    font-size: 1rem;
    text-align: center;
    background-color: ${({ theme }) => theme.box};
    padding: 30px;
    border-radius: 30px;
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
        border-radius: 20px;
        margin: 50px 0;
        padding: 20px;
        font-size: 14px;
    }
`;

const Projects = styled.div`
    max-width: 1024px;
    margin: auto;
    transition: all 0.3s ease-in-out;

    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        padding: 60px;
    }

    @media (max-width: 480px) {
        width: 100%;

        .card-list {
            padding: 20px 0;
            gap: 10px;
            flex-direction: column;
        }
    }
`;

const Card = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    position: relative;
    flex: 0 1 calc(50% - 25px);
    box-shadow: 0 0 1px gray;
    border-radius: 30px;
    overflow: hidden;

    @media (max-width: 1024px) {
        border-radius: 20px;
    }

    @media (max-width: 480px) {
        flex: none;
        border-radius: 10px;
    }
`;

const FadeInText = ({ text }) => {
    const words = text.split(' ');
    return (
        <motion.div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    style={{ display: 'inline-block', marginRight: '10px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.3, duration: 0.5 }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

const MainPage = () => {
    const { scrollY } = useScroll();

    const [firstContentPosition, setFirstContentPosition] = useState(0);

    const ProjectList = [
        {
            image: PJIMAGE,
            name: 'PJ',
            info: '여행 일정 관리 서비스',
            tags: ['팀 프로젝트', 'web 기반', 'React', 'styled-components'],
        },
        {
            image: BIMAGE,
            name: 'Beanery',
            info: '커머스 사이트',
            tags: ['개인 프로젝트', 'mobile 기반', 'React', 'tailwind css'],
        },
        {
            image: VIMAGE,
            name: 'vinefactory',
            info: '서비스 사이트',
            tags: ['서비스 사이트', 'RWD', 'next', 'tailwind css'],
        },
    ];

    const navigate = useNavigate();

    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const triggerPoint = firstContentPosition - windowHeight / 2;

    const scale = useTransform(scrollY, [triggerPoint, triggerPoint + 200], [1, 0]);

    const contentScale = useTransform(scrollY, [triggerPoint, triggerPoint + 100], [0.7, 1]);

    useEffect(() => {
        const firstContentElement = document.getElementById('first-content');
        if (firstContentElement) {
            setFirstContentPosition(firstContentElement.offsetTop);
        }
    }, []);

    return (
        <Container>
            <About style={{ scale }}>
                <div className="name">kim museong</div>
                <FadeInText text={'Intuitive'} />
                <div className="text-border">web</div>
                <FadeInText text={'user experience'} />
            </About>

            <FirstContent id="first-content" style={{ scale: contentScale }}>
                <img className="title-image" />
                <ul className="social">
                    <li>
                        <img className="github" src="/portfolio/github-mark-white.png" />
                    </li>
                    <li>
                        <img src="/portfolio/T_story.png" />
                    </li>
                </ul>
            </FirstContent>

            <Intro
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.3, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <p className="title">안녕하세요. 프론트엔드 개발자 김무성입니다.</p>
                <p>사용자 중심의 직관적이고 편리한 웹사이트를 만드는 것을 좋아합니다.</p>
            </Intro>

            <motion.div
                style={{ fontSize: '1.5rem' }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <p>My project</p>
            </motion.div>

            <Projects>
                <ul className="card-list">
                    {ProjectList.map(({ image, name }) => (
                        <Card
                            whileInView={{ scale: 1, opacity: 1 }}
                            initial={{ scale: 0.3, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            key={name}
                            onClick={() => navigate(`/projects/${name}`)}
                            src={image}
                        ></Card>
                    ))}
                </ul>
            </Projects>
        </Container>
    );
};

export default MainPage;
