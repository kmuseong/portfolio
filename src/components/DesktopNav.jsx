import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const DesktopNavWrapper = styled.ul`
    display: flex;
    gap: 20px;
    text-transform: uppercase;
    background-color: ${({ theme }) => `rgba(${theme.background}, 0.3)`};
    backdrop-filter: blur(10px);
    border-radius: 999px;
    padding: 5px 12px;
    transition: all 0.3s ease-in-out;

    a {
        padding: 8px 18px;
        transition: all 0.2s ease-in-out;
        color: ${({ theme }) => theme.text};

        &:hover {
            color: ${({ theme }) => theme.content};
        }
    }

    .active {
        color: ${({ theme }) => theme.title};
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const DesktopNav = () => {
    const location = useLocation();
    const navlist = ['about', 'resume', 'projects'];

    return (
        <DesktopNavWrapper>
            {navlist.map((path) => (
                <Link key={path} to={`/${path}`} className={location.pathname === `/${path}` ? 'active' : ''}>
                    {path}
                </Link>
            ))}
        </DesktopNavWrapper>
    );
};

export default DesktopNav;
