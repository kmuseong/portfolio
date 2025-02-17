import styled from 'styled-components';
import useInViewAnimation from '../../hooks/useInViewAnimation';
import { TextBox, Box } from '../AnimatedComponents';

const ProjectTroubleshootingItem = ({ item, index }) => {
    const { textRef, boxRef, textVisible, boxVisible } = useInViewAnimation();

    return (
        <Container $reverse={index % 2 !== 0}>
            <Image ref={boxRef} $visible={boxVisible}>
                <img src={item.image} alt={item.title} />
            </Image>

            <Description ref={textRef} $visible={textVisible}>
                <div>
                    <p className="title">{item.title}</p>
                    <p className="content">{item.content}</p>
                </div>
            </Description>
        </Container>
    );
};

export default ProjectTroubleshootingItem;

const Container = styled.div`
    display: flex;
    gap: 50px;
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const Description = styled(TextBox)`
    flex: 1;
    padding-top: 30px;

    .title {
        font-size: 30px;
        margin-bottom: 50px;
        color: ${({ theme }) => theme.content};
        transition: all 0.3s ease-in-out;
    }

    .content {
        color: ${({ theme }) => theme.text};
        white-space: pre-line;
        line-height: 2;
        text-transform: capitalize;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        padding-top: 0;

        .title {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .content {
            font-size: 13px;
        }
    }
`;

const Image = styled(Box)`
    flex: 1;
    background-color: ${({ theme }) => theme.box};
    transition: all 0.3s ease-in-out;

    img {
        width: 100%;
        height: auto;
        min-height: 300px;
        max-height: 500px;
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
