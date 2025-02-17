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
    word-wrap: break-word;
    word-break: keep-all;

    .sub-title {
        font-size: 20px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.text};
    }

    .title {
        font-size: 30px;
        color: ${({ theme }) => theme.title};
    }

    @media (max-width: 1024px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        padding: 0 20px;
        font-size: 20px;

        .sub-title {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .title {
            font-size: 24px;
        }
    }
`;

const Image = styled(Box)`
    img {
        width: 100%;
        object-fit: contain;
    }
`;
