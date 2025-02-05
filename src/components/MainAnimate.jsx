import styled, { keyframes } from 'styled-components';

const lineAnimation = keyframes`
  0% {
    width: 80%;
    left: 10%;
    right: 10%;
  }
  100% {
    width: 6px;
    left: 50%;
    right: 50%;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
    position: relative;
    z-index: 10;
`;

const Line = styled.div`
    width: 80%;
    left: 10%;
    right: 10%;
    height: 6px;
    border-radius: 999px;
    position: absolute;
    top: 50%;
    z-index: 20;
    background-color: #000000;
    animation: ${lineAnimation} 0.5s forwards, ${fadeOut} 2s 0.3s forwards;
    animation-delay: 0.5s;
`;

const Text = styled.div`
    /* color: white; */
    /* font-weight: bold; */
    /* font-size: 35px; */
    opacity: 0;
    animation: ${fadeIn} 0.5s forwards;
    animation-delay: 1.5s;
`;

const MainAnimate = ({ children }) => {
    return (
        <Container>
            <Line />
            <Text>{children}</Text>
        </Container>
    );
};

export default MainAnimate;
