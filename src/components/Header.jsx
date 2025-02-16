import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderS = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    padding: 10px 20px;

    div {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 30px;
        color: black;
    }

    .menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        background-color: white;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
        .menu-button {
            display: block;
        }
    }
`;

const Nav = styled.ul`
    display: flex;
    gap: 20px;
    text-transform: uppercase;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 999px;
    padding: 5px 12px;

    a {
        padding: 8px 18px;
        transition: all 0.2s ease-in-out;
        color: rgba(0, 0, 0, 0.5);

        &:hover {
            color: rgba(0, 0, 0, 0.78);
        }
    }

    .active {
        color: rgba(0, 0, 0, 1);
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 60px;
        right: 20px;
        flex-direction: column;
        background: white;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        align-items: center;
    }
`;

const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const navlist = ['about', 'resume', 'projects'];

    return (
        <HeaderS>
            <div>
                <Link to="/" className="logo">
                    M
                </Link>
                <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <Nav isOpen={isOpen}>
                    {navlist.map((path) => (
                        <Link
                            key={path}
                            to={`/${path}`}
                            className={location.pathname === `/${path}` ? 'active' : ''}
                            onClick={() => setIsOpen(false)}
                        >
                            {path}
                        </Link>
                    ))}
                </Nav>

                <Link to="/" className="logo" style={{ visibility: 'hidden' }}>
                    M
                </Link>
            </div>
        </HeaderS>
    );
};

export default Header;
