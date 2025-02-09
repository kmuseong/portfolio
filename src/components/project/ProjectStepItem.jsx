import styled from 'styled-components';
import useInViewAnimation from '../../hooks/useInViewAnimation';
import { TextBox, Box } from '../AnimatedComponents';

const ProjectStepItem = ({ step, index }) => {
    const { textRef, boxRef, textVisible, boxVisible } = useInViewAnimation();

    return (
        <div className="box">
            {index % 2 === 0 ? (
                <Image ref={boxRef} $visible={boxVisible}>
                    <img src={step.image} alt={step.title} />
                </Image>
            ) : null}

            <Description ref={textRef} $visible={textVisible}>
                <div>
                    <p className="title">{step.title}</p>
                    <p className="content">{step.content}</p>
                </div>
            </Description>

            {index % 2 !== 0 ? (
                <Image ref={boxRef} $visible={boxVisible}>
                    <img src={step.image} alt={step.title} />
                </Image>
            ) : null}
        </div>
    );
};

export default ProjectStepItem;

const Description = styled(TextBox)`
    flex: 1;
    min-width: 50%;
    padding-top: 50px;
    display: flex;
    justify-content: center;

    .title {
        font-size: 30px;
        margin-bottom: 50px;
        opacity: 0.7;
    }

    .content {
        opacity: 0.5;
    }
`;

const Image = styled(Box)`
    flex: 1;

    img {
        width: 100%;
        height: auto;
        min-height: 300px;
        object-fit: contain;
        box-shadow: 0 0 1px gray;
        border-radius: 10px;
    }
`;
