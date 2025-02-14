import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectsPage from './ProjectsPage';
import StaticBallCanvas from '../components/StaticBallCanvas';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
`;

const About = styled(motion.div)`
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: white;
    position: sticky;
    top: 150px;
    z-index: -1;
    margin-top: 30vh;
    font-size: 6rem;

    .text-border {
        color: white;
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.4);
        font-weight: 500;
    }

    .name {
        font-size: 1.2rem;
        color: rgb(148, 148, 148);
        font-weight: 300;
        letter-spacing: 5px;
        padding-bottom: 10px;
    }
`;

const FirstContent = styled(motion.div)`
    padding: 10px;
    margin-top: 20vh;
    background-color: white;
    border-radius: 40px;
    position: relative;

    .title-image {
        min-width: 350px;
        min-height: 400px;
        background-color: gray;
        border-radius: 30px;
    }

    .social {
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
    margin-top: 100px;
    font-size: 1.2rem;
    text-align: center;
    background-color: #e9e9e9;
    padding: 30px;
    border-radius: 30px;
    color: rgba(0, 0, 0, 0.78);
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Letter = ({ letter, delay }) => {
    return (
        <motion.span
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.2 }}
        >
            {letter}
        </motion.span>
    );
};

const FadeInText = ({ text }) => {
    return (
        <motion.div>
            {text.split('').map((letter, i) => (
                <Letter key={i} letter={letter} delay={i * 0.03} />
            ))}
        </motion.div>
    );
};

const MainPage = () => {
    const { scrollY } = useScroll();

    const [firstContentPosition, setFirstContentPosition] = useState(0);

    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const triggerPoint = firstContentPosition - windowHeight / 2;

    const scale = useTransform(scrollY, [triggerPoint, triggerPoint + 200], [1, 0]);

    const contentScale = useTransform(scrollY, [triggerPoint, triggerPoint + 100], [0.8, 1]);

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
                viewport={{ once: true }}
            >
                <p className="title">안녕하세요. 프론트엔드 개발자 김무성입니다.</p>
                <p>사용자 중심의 직관적이고 편리한 웹사이트를 만드는 것을 좋아합니다.</p>
            </Intro>

            <div>
                <div>
                    <p>My project</p>
                </div>
                <ProjectsPage />
            </div>
        </Container>
    );
};

export default MainPage;
