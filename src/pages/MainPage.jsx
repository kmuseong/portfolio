import styled, { keyframes } from 'styled-components';
import MainAnimate from '../components/MainAnimate';
import { BsChevronCompactDown } from 'react-icons/bs';
import ProjectsPage from './ProjectsPage';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-color: inherit;
    overflow: hidden;
    text-transform: uppercase;
`;

const About = styled.div`
    position: relative;
    color: #000000;
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 30px;

    .title {
        display: flex;
        align-items: end;
        justify-content: center;
        gap: 10px;
        z-index: 20;
    }

    .sub-title {
        opacity: 0.7;
        font-size: 16px;
        text-align: center;
        z-index: 1;
    }

    .light {
        font-weight: 500;
    }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation-delay: 2s;
    background-color: white;
    z-index: 10;
    animation: ${fadeOut} 0.5s ease-in forwards;
    animation-delay: 2.5s;
`;

const bounceAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
`;

const DownArrow = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    font-size: 50px;

    animation: ${bounceAnimation} 1.5s infinite ease-in-out;

    svg {
        transition: all 0.2s ease-in-out;
        opacity: 0.3;
    }

    &:hover {
        svg {
            opacity: 1;
        }
    }
`;

const MainPage = () => {
    const projectRef = useRef(null);
    const [isAnimationSeen, setIsAnimationSeen] = useState(false);

    const handleScrollToProjects = () => {
        if (projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const animationStatus = sessionStorage.getItem('animationSeen');
        if (!animationStatus) {
            setIsAnimationSeen(true);
            sessionStorage.setItem('animationSeen', 'true');
        }
    }, []);

    return (
        <>
            <Container>
                {isAnimationSeen && <Overlay />}

                <About>
                    <div className="title">
                        <p>UX를 최우선으로 성장하고자 하는</p>
                        <MainAnimate isAnimationSeen={isAnimationSeen} className="light">
                            김무성
                        </MainAnimate>
                        입니다.
                    </div>
                    <div className="sub-title">
                        프론트엔드 개발자 김무성입니다. 사용자에게
                        <span className="light"> 향상된 속도</span>와 <span className="light">시각적인 경험</span>을
                        중요시합니다.
                    </div>
                </About>

                <DownArrow onClick={handleScrollToProjects}>
                    <BsChevronCompactDown />
                </DownArrow>
            </Container>

            <div ref={projectRef}>
                <ProjectsPage />
            </div>
        </>
    );
};

export default MainPage;
