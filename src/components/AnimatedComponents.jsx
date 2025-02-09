import styled, { css } from 'styled-components';

const BoxStyle = css`
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transform: translateY(${(props) => (props.$visible ? '0' : '20px')});
    transition: opacity 0.6s ease, transform 1s ease;
`;

const TextStyle = css`
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transition: opacity 0.3s ease, transform 0.3s ease-out;
`;

export const TextBox = styled.div`
    ${TextStyle}
`;

export const Box = styled.div`
    ${BoxStyle}
`;
