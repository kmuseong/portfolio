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
    opacity: 0.7;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 100px;
`;
