import styled from 'styled-components';
import useInViewAnimation from '../../hooks/useInViewAnimation';
import { TextBox, Box } from '../AnimatedComponents';

const ProjectTroubleshootingItem = ({ item, index }) => {
    const { textRef, boxRef, textVisible, boxVisible } = useInViewAnimation();

    return (
        <Container key={index}>
            {index % 2 === 0 ? (
                <Image ref={boxRef} $visible={boxVisible}>
                    <img src={item.image} alt={item.title} />
                </Image>
            ) : null}
            <Description ref={textRef} $visible={textVisible}>
                <p className="title">{item.title}</p>
                <p className="content">{item.content}</p>
            </Description>
            {index % 2 !== 0 ? (
                <Image ref={boxRef} $visible={boxVisible}>
                    <img src={item.image} alt={item.title} />
                </Image>
            ) : null}
        </Container>
    );
};

export default ProjectTroubleshootingItem;

const Container = styled.div`
    display: flex;
    gap: 50px;
`;

const Description = styled(TextBox)`
    flex: 1;
    padding-top: 30px;

    .title {
        font-size: 30px;
        margin-bottom: 50px;
        opacity: 0.7;
    }

    .content {
        opacity: 0.5;
        white-space: pre-line;
        line-height: 2;
        text-transform: capitalize;
    }
`;

const Image = styled(Box)`
    flex: 1;

    img {
        width: 100%;
        height: auto;
        min-height: 300px;
        max-height: 500px;
        object-fit: contain;
        box-shadow: 0 0 1px gray;
        border-radius: 10px;
    }
`;
