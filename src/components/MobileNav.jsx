import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import ThemeButton from './ThemeButton';

const MobileNavWrapper = styled.nav`
    text-transform: uppercase;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-999px)')};
    transition: all 0.3s ease-in-out;
    text-align: center;
    width: 100%;
    position: fixed;
    top: 56px;
    left: 0;
    display: none;
    flex-direction: column;
    padding: 30px 0;
    gap: 40px;
    background-color: ${({ theme }) => theme.background};
    z-index: 2;
    box-shadow: ${({ theme }) => `0 0 2px ${theme.border}`};

    a {
        color: ${({ theme }) => theme.text};

        &:hover {
            color: ${({ theme }) => theme.content};
        }
    }

    .active {
        color: ${({ theme }) => theme.title};
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.border};
    display: none;
    z-index: 1;

    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    }
`;

const MobileNav = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const navlist = ['about', 'resume', 'projects'];

    return (
        <>
            <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />

            <MobileNavWrapper $isOpen={isOpen}>
                {navlist.map((path) => (
                    <Link
                        key={path}
                        className={location.pathname === `/${path}` ? 'active' : ''}
                        to={`/${path}`}
                        onClick={() => setIsOpen(false)}
                    >
                        {path}
                    </Link>
                ))}
                <ThemeButton />
            </MobileNavWrapper>
        </>
    );
};

export default MobileNav;
