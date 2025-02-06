import styled from 'styled-components';
import data from '../data/PJ.json';
import ProjectTitle from '../components/project/ProjectTitle';
import ProjectDetail from '../components/project/ProjectDetail';
import ProjectSteps from '../components/project/ProjectSteps';
import ProjectTroubleshooting from '../components/project/ProjectTroubleshooting';

const Container = styled.div`
    padding: 200px 0;
`;

const Step = styled.div`
    padding: 40px 0;
    margin-bottom: 50px;
    background-color: ${({ $bg }) => $bg};
    color: ${({ $text }) => $text};

    p {
        max-width: 1200px;
        margin: auto;
        font-size: 40px;
    }
`;

const ProjectDetailPage = () => {
    return (
        <Container>
            <ProjectTitle data={data.title} />

            <ProjectDetail data={data.detail} />

            <ProjectSteps data={data.intro} />

            <Step $bg={data.theme.bg} $text={data.theme.text}>
                <p>트러블 슈팅</p>
            </Step>

            <ProjectTroubleshooting data={data.troubleshooting} />
        </Container>
    );
};

export default ProjectDetailPage;
