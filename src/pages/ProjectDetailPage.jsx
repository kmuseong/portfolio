import styled from 'styled-components';
import ProjectTitle from '../components/project/ProjectTitle';
import ProjectDetail from '../components/project/ProjectDetail';
import ProjectSteps from '../components/project/ProjectSteps';
import ProjectTroubleshooting from '../components/project/ProjectTroubleshootinglist';
import { useParams } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';
import ProjectScrollList from '../components/project/ProjectScrollList';

const Container = styled.div`
    position: relative;
    padding: 150px 0;
    z-index: 0;
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

    @media (max-width: 1024px) {
        margin-top: 50px;
        padding: 40px;
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        padding: 30px 20px;
        margin-bottom: 0;

        p {
            font-size: 30px;
        }
    }
`;

const ProjectDetailPage = () => {
    const { projectName } = useParams();
    const { projectData } = useProject();

    const project = projectData[projectName];

    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
        <Container>
            <ProjectTitle data={project?.title} />

            <ProjectDetail data={project?.detail} />

            <ProjectSteps data={project?.intro} />

            {project?.troubleshooting && (
                <>
                    <Step $bg={project?.title?.theme.bg} $text={project?.title?.theme.text}>
                        <p>트러블 슈팅</p>
                    </Step>

                    <ProjectTroubleshooting data={project?.troubleshooting} />
                </>
            )}

            <ProjectScrollList data={project} />
        </Container>
    );
};

export default ProjectDetailPage;
