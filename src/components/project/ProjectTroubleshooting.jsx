import styled from 'styled-components';

const ProjectTroubleshooting = ({ data }) => {
    return (
        <Intro>
            {data.map(({ name, content }) => (
                <div key={name}>
                    <div>{name}</div>
                    {content.map((step, index) => (
                        <div className="box" key={index}>
                            {index % 2 === 0 ? <img src={step.image} alt={step.title} /> : null}
                            <div className="description">
                                <p className="title">{step.title}</p>
                                <p className="content">{step.content}</p>
                            </div>
                            {index % 2 !== 0 ? <img src={step.image} alt={step.title} /> : null}
                        </div>
                    ))}
                </div>
            ))}
        </Intro>
    );
};

export default ProjectTroubleshooting;

const Intro = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10rem;
    max-width: 1024px;
    margin: auto;
    padding: 5rem 0;

    .box {
        display: flex;
        gap: 50px;
    }

    .description {
        padding-top: 30px;
    }

    .title {
        font-size: 30px;
        margin-bottom: 50px;
        opacity: 0.7;
    }

    .content {
        opacity: 0.5;
        white-space: pre-line;
        line-height: 2;
    }

    img {
        flex: 1;
        max-width: 50%;
        height: auto;
        object-fit: contain;
        box-shadow: 0 0 1px gray;
        border-radius: 30px;
    }
`;
