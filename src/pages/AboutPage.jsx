import { BookText, Github, Mail } from 'lucide-react';
import styled from 'styled-components';
import { Box } from '../components/AnimatedComponents';
import useInViewAnimation from '../hooks/useInViewAnimation';

const Container = styled.div`
    max-width: 1024px;
    margin: auto;
    height: 100%;

    @media (max-width: 1024px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 15%;

    .greetings {
        color: ${({ theme }) => theme.title};
        font-size: 30px;
    }

    .job {
        color: ${({ theme }) => theme.title};
        font-size: 30px;
        font-weight: 300;
    }

    @media (max-width: 1024px) {
        padding-top: 150px;

        .greetings {
            font-size: 20px;
        }

        .job {
            font-size: 20px;
        }
    }
`;

const SocialList = styled.ul`
    display: flex;
    gap: 15px;
    padding: 10px 0;

    li {
        display: flex;
        gap: 5px;
        align-items: center;
        color: ${({ theme }) => theme.title};
        font-size: 15px;
    }

    button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        border: none;
        background-color: inherit;
        width: 100%;
        justify-content: flex-start;
        font-size: 15px;
        color: ${({ theme }) => theme.title};
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 5px;

        li,
        button {
            font-size: 12px;
        }
    }
`;

const ContentBox = styled(Box)`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        line-height: 1.5;
        color: ${({ theme }) => theme.text};
    }

    @media (max-width: 480px) {
        font-size: 12px;
        gap: 15px;
    }
`;

const AboutPage = () => {
    const { boxRef, boxVisible } = useInViewAnimation();

    const onClickMoveSite = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Container>
            <Intro>
                <h1 className="greetings">안녕하세요. 김무성입니다.</h1>
                <p className="job">Frontend Developer</p>
            </Intro>

            <SocialList>
                <li>
                    <Mail strokeWidth={1} />
                    <p>antjd0419@gmail.com</p>
                </li>
                <li>
                    <button onClick={() => onClickMoveSite('https://github.com/kmuseong')}>
                        <Github strokeWidth={1} />
                        kmuseong
                    </button>
                </li>
                <li>
                    <button onClick={() => onClickMoveSite('https://mutudy.tistory.com/')}>
                        <BookText strokeWidth={1} />
                        무터디
                    </button>
                </li>
            </SocialList>

            <ContentBox ref={boxRef} $visible={boxVisible}>
                <p>
                    유튜브를 통해 웹 개발을 처음 접했고, 코드 퀴즈를 풀면서 코드가 원하는 대로 동작하는 과정이 흥미로워
                    본격적으로 공부를 시작했습니다. 처음에는 기본적인 레이아웃을 구현하는 것조차 어려웠지만, 점차 개발
                    환경과 도구에 익숙해지면서 기능을 추가하는 과정이 재미있어졌습니다.
                </p>

                <p>
                    하지만 단순히 기능을 구현하는 것만으로는 충분하지 않다는 것을 깨달았습니다. API 응답 속도가 느려
                    로딩 시간이 길어지는 문제를 경험했고, 이를 해결하기 위해 스켈레톤 UI를 적용하여 사용자 경험을
                    개선했습니다. 또한, API 최적화를 고민하며 성능 개선이 사용자 경험에 미치는 영향을 직접 경험할 수
                    있었습니다.
                </p>

                <p>
                    최근에는 SSR과 SSG를 공부하며 Next.js에 관심을 가지게 되었고, 사용자들이 웹보다 모바일을 더 많이
                    이용하는 환경을 고려하여 React Native같은 크로스 플랫폼 프레임워크에도 흥미를 느끼고 있습니다.
                    앞으로는 성능 최적화뿐만 아니라 접근성과 반응형 디자인등 다양한 사용자 경험 요소를 고민하며 성장해
                    나가고 싶습니다.
                </p>
            </ContentBox>
        </Container>
    );
};

export default AboutPage;
