import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    background-color: rgba(247, 247, 247, 0.8);
    padding: 20px 10px;
    border-radius: 999px;
    backdrop-filter: blur(4px);
    z-index: 999;
`;

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
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

    .a {
        width: 25px;
        opacity: 0.5;
        transition: all 0.2s ease;
    }

    &.active .a {
        transform: scale(1.3);
        opacity: 1;
        color: ${({ $bg }) => $bg};
    }

    &:hover ${TextBox} {
        opacity: 1;
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

    const textList = {
        title: {
            name: '메인',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            ),
        },
        detail: {
            name: '소개',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            ),
        },
        intro: {
            name: '기능',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            ),
        },
        troubleshooting: {
            name: '트러블슈팅',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                </svg>
            ),
        },
        site: {
            name: '사이트',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                </svg>
            ),
        },
        github: {
            name: '깃허브',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                </svg>
            ),
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 a"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    <TextBox>맨 위로</TextBox>
                </ListItem>
                {Object.keys(data).map((key) => (
                    <ListItem
                        $bg={data.title.theme.bg}
                        key={key}
                        className={activeId === key ? 'active' : ''}
                        onClick={() => handleScroll(key)}
                    >
                        <div className="a">{textList[key].icon}</div>

                        <TextBox>{textList[key].name}</TextBox>
                    </ListItem>
                ))}
            </ListContainer>
        </Container>
    );
};

export default ProjectScrollList;
