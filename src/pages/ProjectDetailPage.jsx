import styled from 'styled-components';
import ProjectTitle from '../components/project/ProjectTitle';
import ProjectDetail from '../components/project/ProjectDetail';
import ProjectSteps from '../components/project/ProjectSteps';
import ProjectTroubleshooting from '../components/project/ProjectTroubleshootinglist';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProjectScrollList from '../components/project/ProjectScrollList';

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
    const { projectName } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/portfolio/data/${projectName}.json`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error loading project data:', error);
            }
        };

        fetchData();
    }, [projectName]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <ProjectTitle data={data?.title} />

            <ProjectDetail data={data?.detail} />

            <ProjectSteps data={data?.intro} />

            {data.troubleshooting && (
                <>
                    <Step $bg={data.title?.theme.bg} $text={data.title?.theme.text}>
                        <p>트러블 슈팅</p>
                    </Step>

                    <ProjectTroubleshooting data={data?.troubleshooting} />
                </>
            )}

            <ProjectScrollList data={data} />
        </Container>
    );
};

export default ProjectDetailPage;
