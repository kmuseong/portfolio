import styled from 'styled-components';

const ProjectTitle = ({ data }) => {
    return (
        <Title>
            <div className="intro">
                <p className="sub-title">{data?.subTitle}</p>
                <p className="title">{data?.mainTitle}</p>
            </div>

            <img src={data?.image} alt="" />
        </Title>
    );
};

export default ProjectTitle;

const Title = styled.section`
    img {
        width: 100%;
        object-fit: contain;
    }

    .intro {
        max-width: 1024px;
        margin: auto;
    }

    .sub-title {
        font-size: 20px;
        margin-bottom: 10px;
        opacity: 0.7;
    }

    .title {
        font-size: 30px;
    }
`;
