import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderS = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
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
        color: black;
    }
`;

const Nav = styled.ul`
    display: flex;
    gap: 20px;
    text-transform: capitalize;

    a {
        padding: 8px 18px;
        transition: all 0.2s ease-in-out;
        color: rgba(0, 0, 0, 0.3);

        &:hover {
            color: rgba(0, 0, 0, 0.78);
        }
    }

    .active {
        color: rgba(0, 0, 0, 1);
    }
`;

const Header = () => {
    const location = useLocation();

    const navlist = ['about', 'resume', 'projects'];

    return (
        <HeaderS>
            <div>
                <Link to="/" className="logo">
                    M
                </Link>
                <nav>
                    <Nav>
                        {navlist.map((path) => (
                            <Link
                                key={path}
                                to={`/${path}`}
                                className={location.pathname === `/${path}` ? 'active' : ''}
                            >
                                {path}
                            </Link>
                        ))}
                    </Nav>
                </nav>
            </div>
        </HeaderS>
    );
};

export default Header;
