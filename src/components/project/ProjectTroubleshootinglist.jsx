import styled from 'styled-components';
import ProjectTroubleshooting from './ProjectTroubleshooting';

const ProjectTroubleshootinglist = ({ data }) => {
    return (
        <Section id="troubleshooting">
            {data?.map((item, index) => (
                <ProjectTroubleshooting key={item.name} item={item} index={index} />
            ))}
        </Section>
    );
};

export default ProjectTroubleshootinglist;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10rem;
    max-width: 1024px;
    margin: auto;
    padding: 5rem 0;

    @media (max-width: 1024px) {
        padding: 3rem 40px;
    }

    @media (max-width: 768px) {
        padding: 3rem 20px;
        gap: 5rem;
    }

    @media (max-width: 480px) {
    }
`;
