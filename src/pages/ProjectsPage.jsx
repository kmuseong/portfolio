import styled from 'styled-components';
import PJIMAGE from '../assets/PJ-image.png';
import BIMAGE from '../assets/Beanery-image.png';
import VIMAGE from '../assets/vinefactory-image.png';
import { useNavigate } from 'react-router-dom';

const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.2s ease;
    font-size: 40px;
    color: ${({ theme }) => theme.title};

    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

const Card = styled.div`
    cursor: pointer;
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
    transition: all 0.2s ease;

    img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
        border-radius: 30px;
        box-shadow: 0 0 1px gray;
    }

    .tag {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        li {
            padding: 8px 20px;
            font-size: 13px;
            background-color: ${({ theme }) => theme.box};
            color: ${({ theme }) => theme.text};
            border-radius: 9999px;
            text-transform: capitalize;
            transition: all 0.3s ease-in-out;
        }
    }

    @media (max-width: 1024px) {
        img {
            border-radius: 10px;
        }

        .tag {
            li {
                font-size: 10px;
            }
        }
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 0;

    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        padding: 60px;
    }

    .card {
        cursor: pointer;
        position: relative;
        flex: 0 1 calc(50% - 25px);

        &:hover ${Card} {
            opacity: 0.3;
        }

        &:hover ${Overlay} {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        padding: 0 20px;

        .card-list {
            flex-direction: column;
            padding: 100px 0;
            gap: 50px;
        }
    }
`;

const ProjectsPage = () => {
    const navigate = useNavigate();

    const ProjectList = [
        {
            image: PJIMAGE,
            name: 'PJ',
            info: '여행 일정 관리 서비스',
            tags: ['팀 프로젝트', 'web 기반', 'React', 'styled-components'],
        },
        {
            image: BIMAGE,
            name: 'Beanery',
            info: '커머스 사이트',
            tags: ['개인 프로젝트', 'mobile 기반', 'React', 'tailwind css'],
        },
        {
            image: VIMAGE,
            name: 'vinefactory',
            info: '서비스 사이트',
            tags: ['서비스 사이트', 'RWD', 'next', 'tailwind css'],
        },
    ];

    return (
        <Container>
            <ul className="card-list">
                {ProjectList.map(({ image, name, info, tags }) => (
                    <li className="card" key={name} onClick={() => navigate(`/projects/${name}`)}>
                        <Card>
                            <img src={image} />

                            <ul className="tag">
                                {tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </Card>
                        <Overlay>{info}</Overlay>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default ProjectsPage;
