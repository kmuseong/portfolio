import styled from 'styled-components';
import ProjectStepItem from './ProjectStepItem';

const ProjectSteps = ({ data }) => {
    return (
        <Intro id="intro">
            {data.map((step, index) => (
                <ProjectStepItem key={index} step={step} index={index} />
            ))}
        </Intro>
    );
};

export default ProjectSteps;

const Intro = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10rem;
    max-width: 1024px;
    margin: auto;
    padding: 10rem 0;

    .box {
        display: flex;
        gap: 50px;
    }
`;
