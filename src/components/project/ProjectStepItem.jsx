import styled from 'styled-components';
import useInViewAnimation from '../../hooks/useInViewAnimation';
import { TextBox, Box } from '../AnimatedComponents';

const ProjectStepItem = ({ step, index }) => {
    const { textRef, boxRef, textVisible, boxVisible } = useInViewAnimation();

    return (
        <Content $reverse={index % 2 !== 0}>
            <ImageWrapper ref={boxRef} $visible={boxVisible}>
                <img src={step.image} alt={step.title} />
            </ImageWrapper>

            <Description ref={textRef} $visible={textVisible}>
                <div>
                    <p className="title">{step.title}</p>
                    <p className="content">{step.content}</p>
                </div>
            </Description>
        </Content>
    );
};

export default ProjectStepItem;

const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 50px;
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const Description = styled(TextBox)`
    flex: 1;
    min-width: 50%;
    display: flex;
    justify-content: center;

    .title {
        font-size: 30px;
        margin-bottom: 50px;
        color: ${({ theme }) => theme.content};
        transition: all 0.3s ease-in-out;
    }

    .content {
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 1024px) {
        padding-top: 0;
    }

    @media (max-width: 768px) {
        padding-top: 0;
        width: 100%;
        justify-content: left;

        .title {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .content {
            font-size: 13px;
        }
    }

    @media (max-width: 480px) {
    }
`;

const ImageWrapper = styled(Box)`
    flex: 1;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.box};
    transition: all 0.3s ease-in-out;

    img {
        width: 100%;
        height: auto;
        min-height: 300px;
        object-fit: contain;
        box-shadow: 0 0 1px gray;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        order: 2;

        img {
            min-height: 100px;
        }
    }
`;
