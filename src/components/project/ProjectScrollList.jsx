import { BookOpen, ChevronUp, Github, Globe, House, Joystick, Monitor, Ellipsis } from 'lucide-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 50%;
    right: 1.5%;
    transform: translateY(-50%);
    z-index: 999;
    display: flex;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 1024px) {
        bottom: 75px;
        right: 20px;
        top: auto;
        transform: none;
    }
`;

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: ${({ theme }) => theme.box};
    padding: 20px 10px;
    border-radius: 999px;
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;

    @media (max-width: 1024px) {
        position: absolute;
        right: 0;
        gap: 15px;
        padding: 20px 5px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        gap: 15px;
        padding: 20px 5px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
        opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
        bottom: ${({ $isOpen }) => ($isOpen ? '120px' : '-120px')};
    }
`;

const FloatingButton = styled.button`
    display: none;
    background-color: ${({ theme }) => theme.box};
    border: none;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 1000;
    justify-content: center;
    align-items: center;

    .icon {
        width: 25px;
        color: ${({ theme }) => theme.text};
        transition: all 0.2s ease;
    }

    @media (max-width: 1024px) {
        display: flex;
        bottom: 20px;
        right: 20px;
        position: fixed;
    }
`;

const LinkContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: ${({ theme }) => theme.box};
    padding: 20px 10px;
    border-radius: 999px;
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;

    @media (max-width: 1024px) {
        position: absolute;
        bottom: 0;
        right: 0;
        gap: 15px;
        padding: 20px 5px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
        opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
        bottom: ${({ $isOpen }) => ($isOpen ? '0' : '-120px')};
    }
`;

const TextBox = styled.p`
    position: absolute;
    top: 50%;
    right: 150%;
    transform: translateY(-50%);
    background-color: rgba(247, 247, 247, 0.8);
    z-index: 999;
    visibility: hidden;
    color: ${({ theme }) => theme.text};
    opacity: 0;
    white-space: nowrap;
    padding: 6px 20px;
    border-radius: 99px;
    transition: all 0.3s ease;
`;

const ListItem = styled.button`
    padding: 0 5px;
    cursor: pointer;
    border: none;
    text-align: left;
    text-transform: capitalize;
    background-color: transparent;
    position: relative;

    .icon {
        width: 25px;
        color: ${({ theme }) => theme.text};
        transition: all 0.2s ease;
    }

    &.active .icon {
        transform: scale(1.3);
        color: ${({ $bg }) => $bg};
    }

    &:hover ${TextBox} {
        color: ${({ theme }) => theme.content};
        visibility: visible;
        transition: opacity 0.2s ease, visibility 0s 0s;
    }
`;

const ProjectScrollList = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
        );

        Object.keys(data).forEach((key) => {
            const element = document.getElementById(key);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [data]);

    if (!data || typeof data !== 'object') {
        return <p>데이터가 없습니다.</p>;
    }

    return (
        <Container>
            <ListContainer $isOpen={isOpen}>
                <ListItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ChevronUp className="icon" strokeWidth={1} />
                    <TextBox>맨 위로</TextBox>
                </ListItem>

                {Object.keys(data).map((key) => (
                    <ListItem
                        $bg={data.title.theme.bg}
                        key={key}
                        className={activeId === key ? 'active' : ''}
                        onClick={() => {
                            document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' });
                            setIsOpen(false);
                        }}
                    >
                        <div className="icon">{textList[key].icon}</div>
                        <TextBox>{textList[key].name}</TextBox>
                    </ListItem>
                ))}
            </ListContainer>

            <LinkContainer $isOpen={isOpen}>
                <ListItem onClick={() => window.open(data.detail.site, '_blank')}>
                    <Globe className="icon" strokeWidth={1} />
                    <TextBox>사이트</TextBox>
                </ListItem>

                <ListItem onClick={() => window.open(data.detail.github, '_blank')}>
                    <Github className="icon" strokeWidth={1} />
                    <TextBox>깃허브</TextBox>
                </ListItem>
            </LinkContainer>

            <FloatingButton onClick={toggleMenu}>
                <Ellipsis className="icon" />
            </FloatingButton>
        </Container>
    );
};

export default ProjectScrollList;

const textList = {
    title: {
        name: '메인',
        icon: <House strokeWidth={1} />,
    },
    detail: {
        name: '소개',
        icon: <BookOpen strokeWidth={1} />,
    },
    intro: {
        name: '기능',
        icon: <Monitor strokeWidth={1} />,
    },
    troubleshooting: {
        name: '트러블슈팅',
        icon: <Joystick strokeWidth={1} />,
    },
};
