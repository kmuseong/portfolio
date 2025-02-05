import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderS = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 20px;

    div {
        max-width: 1024px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        font-size: 30px;
    }
`;

const Nav = styled.ul`
    display: flex;
    gap: 20px;
    text-transform: capitalize;

    a {
        padding: 8px 18px;
        color: inherit;
        opacity: 0.3;
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 1;
        }
    }

    .active {
        opacity: 1;
    }
`;

const Header = () => {
    const location = useLocation();

    return (
        <HeaderS>
            <div>
                <span className="logo">M</span>
                <nav>
                    <Nav>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                            home
                        </Link>
                        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                            project
                        </Link>
                    </Nav>
                </nav>
            </div>
        </HeaderS>
    );
};

export default Header;
