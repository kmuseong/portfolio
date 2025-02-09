import styled from 'styled-components';
import useInViewAnimation from '../../hooks/useInViewAnimation';
import { TextBox, Box } from '../AnimatedComponents';

const ProjectTitle = ({ data }) => {
    const { textRef, boxRef, textVisible, boxVisible } = useInViewAnimation();

    return (
        <section id="title">
            <Intro ref={textRef} $visible={textVisible}>
                <p className="sub-title">{data?.subTitle}</p>
                <p className="title">{data?.mainTitle}</p>
            </Intro>

            <Image ref={boxRef} $visible={boxVisible}>
                <img src={data?.image} alt="" />
            </Image>
        </section>
    );
};

export default ProjectTitle;

const Intro = styled(TextBox)`
    max-width: 1024px;
    margin: auto;

    .sub-title {
        font-size: 20px;
        margin-bottom: 10px;
        opacity: 0.7;
    }

    .title {
        font-size: 30px;
    }
`;

const Image = styled(Box)`
    img {
        width: 100%;
        object-fit: contain;
    }
`;
