import styled from 'styled-components';
import ProjectTroubleshootingItem from './ProjectTroubleshootingItem';

const ProjectTroubleshooting = ({ item, index }) => {
    return (
        <div key={item.name}>
            <Name>
                {index + 1}. {item.name}
            </Name>

            <List>
                {item.content.map((step, index) => (
                    <ProjectTroubleshootingItem key={index} item={step} index={index} />
                ))}
            </List>
        </div>
    );
};

export default ProjectTroubleshooting;

const Name = styled.div`
    padding: 40px 0;
    font-size: 40px;
    color: ${({ theme }) => theme.content};
    transition: all 0.3s ease-in-out;

    @media (max-width: 480px) {
        font-size: 30px;
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 100px;
`;
