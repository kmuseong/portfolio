import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.text};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;
const ThemeButton = () => {
    const { isDarkMode, setIsDarkMode } = useTheme();

    return (
        <Button onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? <Moon strokeWidth={1} size={30} /> : <Sun strokeWidth={1} size={30} />}
        </Button>
    );
};

export default ThemeButton;
