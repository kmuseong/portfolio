import styled from 'styled-components';

const ProjectSteps = ({ data }) => {
    return (
        <Intro>
            {data.map((step, index) => (
                <div className="box" key={index}>
                    {index % 2 === 0 ? <img src={step.image} alt={step.title} /> : null}
                    <div className="description">
                        <div>
                            <p className="title">{step.title}</p>
                            <p className="content">{step.content}</p>
                        </div>
                    </div>
                    {index % 2 !== 0 ? <img src={step.image} alt={step.title} /> : null}
                </div>
            ))}
        </Intro>
    );
};

export default ProjectSteps;

const Intro = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10rem;
    max-width: 1024px;
    margin: auto;
    padding: 5rem 0;

    .box {
        display: flex;
    }

    .description {
        flex: 1;
        min-width: 50%;
        padding-top: 50px;
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 30px;
        margin-bottom: 50px;
        opacity: 0.7;
    }

    .content {
        opacity: 0.5;
    }

    img {
        flex: 1;
        width: 0;
        height: auto;
        object-fit: contain;
        box-shadow: 0 0 1px gray;
        /* border-radius: 30px; */
    }
`;
