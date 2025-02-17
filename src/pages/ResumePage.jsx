import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    max-width: 1024px;
    height: 100%;
    text-transform: capitalize;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    gap: 100px;

    .title {
        font-size: 30px;
        margin-bottom: 40px;
        color: ${({ theme }) => theme.title};
    }

    .category-title {
        font-weight: 500;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.title};
    }

    @media (max-width: 1024px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        padding: 0 20px;
        gap: 40px;

        .title {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .category-title {
            font-size: 13px;
            margin-bottom: 5px;
        }
    }
`;

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
    color: ${({ theme }) => theme.content};
    animation: ${fadeInUp} 0.6s ease;

    .section-name {
        color: ${({ theme }) => theme.title};
    }

    .section-content {
        font-size: 14px;
        color: ${({ theme }) => theme.content};
    }

    .date {
        font-size: 14px;
        color: ${({ theme }) => theme.text};
    }

    .section-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
    }

    .list {
        display: flex;
        gap: 20px;
        color: ${({ theme }) => theme.content};

        li {
            color: ${({ theme }) => theme.text};
        }
    }

    @media (max-width: 1024px) {
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        gap: 20px;

        .section-item {
            gap: 5px;
        }

        .section-name {
            font-size: 14px;
        }

        .date {
            font-size: 10px;
        }

        .section-content {
            font-size: 11px;
        }

        .list {
            font-size: 13px;
        }
    }
`;

const ResumePage = () => {
    const skillList = {
        development: ['HTML', 'JavaScript', 'React'],
        styling: ['CSS', 'Styled-Components', 'Tailwind CSS'],
    };

    return (
        <Container>
            <div>
                <p className="title">Skills</p>
                <Section>
                    {Object.keys(skillList).map((category, index) => (
                        <div key={index}>
                            <p className="category-title">{category}</p>
                            <ul className="list">
                                {skillList[category].map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Section>
            </div>

            <div>
                <p className="title">Education</p>
                <Section>
                    <li className="section-item">
                        <p className="section-name">금오공업고등학교 기계과 졸업</p>
                        <div className="date">2017.03 - 2020.02</div>
                    </li>
                </Section>
            </div>

            <div>
                <p className="title">Experience</p>
                <Section>
                    <li className="section-item">
                        <p className="section-name">영남인재교육원 | Node.js를 활용한 백&프론트 웹 개발자 양성과정</p>
                        <p className="section-content">
                            Node.js와 React를 활용하여 프론트엔드와 백엔드의 구조 및 흐름을 학습하였으며, 기본적인 API
                            설계 및 데이터 처리 방식을 익혔습니다.
                        </p>
                        <div className="date">2023.01.30 - 2023.07.28 (6개월)</div>
                    </li>

                    <li className="section-item">
                        <p className="section-name">2024 동북 이노베이션 캠프</p>
                        <p className="section-content">
                            Spring 기반의 백엔드 개발자와 협업하며 작업의 우선순위와 소통의 중요성을 경험했습니다. 또한,
                            프로젝트를 진행하면서 웹 최적화 및 성능 개선 방법을 학습하고 적용해보는 경험을 하였습니다.
                        </p>
                        <div className="date">2024.06.17 - 2024.10.04 (4개월)</div>
                    </li>
                </Section>
            </div>
        </Container>
    );
};

export default ResumePage;
