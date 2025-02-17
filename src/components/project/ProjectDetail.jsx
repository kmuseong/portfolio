import styled from 'styled-components';

const ProjectDetail = ({ data }) => {
    return (
        <Detail>
            <div className="box">
                <section id="detail">
                    <p>프로젝트 세부 정보</p>

                    <ul className="content">
                        <li>{data.info.date}</li>

                        {data.info.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <p>기술</p>

                    <ul className="content">
                        {data.tech.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </section>

                {data.role && (
                    <section>
                        <p>담당역할</p>

                        <ul className="content">
                            {data.role?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </Detail>
    );
};

export default ProjectDetail;

const Detail = styled.section`
    background-color: ${({ theme }) => theme.box};
    transition: all 0.3s ease-in-out;

    .box {
        max-width: 1024px;
        margin: auto;
        padding: 40px 0;
        font-size: 20px;
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        gap: 20px;

        p {
            color: ${({ theme }) => theme.content};
            margin: 5px 0;
            font-weight: 500;
            transition: all 0.3s ease-in-out;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        line-height: 2;
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 1024px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        padding: 0 20px;

        .box {
            font-size: 18px;
        }

        .content {
            font-size: 13px;
        }
    }
`;
