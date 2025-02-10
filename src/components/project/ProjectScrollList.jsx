import { BookOpen, ChevronUp, Github, Globe, House, Joystick, Monitor } from 'lucide-react';
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
`;

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: rgba(247, 247, 247, 0.8);
    padding: 20px 10px;
    border-radius: 999px;
    backdrop-filter: blur(4px);
`;

const TextBox = styled.p`
    position: absolute;
    top: 50%;
    right: 150%;
    transform: translateY(-50%);
    background-color: rgba(247, 247, 247, 0.8);
    z-index: 999;
    visibility: hidden;
    color: rgba(0, 0, 0, 0.6);
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
    background-color: inherit;
    position: relative;

    .icon {
        width: 25px;
        color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s ease;
    }

    &.active .icon {
        transform: scale(1.3);
        color: ${({ $bg }) => $bg};
    }

    &:hover ${TextBox} {
        color: rgba(0, 0, 0, 0.78);
        visibility: visible;
        transition: opacity 0.2s ease, visibility 0s 0s;
    }
`;

const ProjectScrollList = ({ data }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.style.scrollMarginTop = '200px';
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const onClickMoveSite = (url) => {
        window.open(url, '_blank');
    };

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

    const [activeId, setActiveId] = useState(null);

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
            <ListContainer>
                <ListItem onClick={scrollToTop}>
                    <ChevronUp className="icon" strokeWidth={1} />

                    <TextBox>맨 위로</TextBox>
                </ListItem>
                {Object.keys(data).map((key) => (
                    <ListItem
                        $bg={data.title.theme.bg}
                        key={key}
                        className={activeId === key ? 'active' : ''}
                        onClick={() => handleScroll(key)}
                    >
                        <div className="icon">{textList[key].icon}</div>

                        <TextBox>{textList[key].name}</TextBox>
                    </ListItem>
                ))}
            </ListContainer>
            <ListContainer>
                <ListItem onClick={() => onClickMoveSite(data.detail.site)}>
                    <Globe className="icon" strokeWidth={1} />

                    <TextBox>사이트</TextBox>
                </ListItem>

                <ListItem onClick={() => onClickMoveSite(data.detail.github)}>
                    <Github className="icon" strokeWidth={1} />

                    <TextBox>깃허브</TextBox>
                </ListItem>
            </ListContainer>
        </Container>
    );
};

export default ProjectScrollList;
