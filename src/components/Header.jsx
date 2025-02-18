import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeButton from './ThemeButton';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    transition: all 0.3s ease-in-out;
    background-color: transparent;

    .logo {
        font-size: 30px;
        color: ${({ theme }) => theme.title};
        transition: all 0.3s ease-in-out;
    }

    .menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.title};
    }

    @media (max-width: 1024px) {
        background-color: ${({ theme }) => theme.background};
    }

    @media (max-width: 768px) {
        box-shadow: ${({ theme, $isOpen }) => ($isOpen ? 'none' : `0 1px 1px ${theme.border}`)};

        .menu-button {
            display: block;
        }
        .desktop {
            display: none;
        }
    }
`;

const HeaderContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 20px;
    z-index: 100;

    @media (max-width: 1024px) {
        padding: 10px 20px;
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <HeaderWrapper $isOpen={isOpen}>
                <HeaderContainer>
                    <Link to="/" className="logo">
                        M
                    </Link>

                    <DesktopNav />

                    <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="desktop">
                        <ThemeButton />
                    </div>
                </HeaderContainer>
            </HeaderWrapper>
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default Header;
