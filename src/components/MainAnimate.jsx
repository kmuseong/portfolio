import styled, { keyframes } from 'styled-components';

const lineAnimation = keyframes`
  0% {
    width: 100%;
    left: 0%;
    right: 0%;
  }
  100% {
    width: 10px;
    left: 50%;
    right: 50%;
  }
`;

const lineDisappear = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const textAnimation = keyframes`
  0% {
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
    position: relative;
`;

const Line = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 999px;
    position: absolute;
    top: 50%;
    background-color: white;
    animation: ${lineAnimation} 0.5s forwards, ${lineDisappear} 2s 0.3s forwards;
    animation-delay: 0.5s;
`;

const Text = styled.div`
    opacity: 0;
    animation: ${textAnimation} 0.5s forwards;
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
