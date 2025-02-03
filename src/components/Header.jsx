import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderS = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    /* color: white; */
    opacity: 0.9;
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
    text-transform: uppercase;

    a {
        padding: 8px 18px;
        color: inherit;
    }
`;

const Header = () => {
    return (
        <HeaderS>
            <div>
                <span className="logo">M</span>
                <nav>
                    <Nav>
                        <Link to="/">home</Link>
                        <Link to="/projects" className="project">
                            project
                        </Link>
                    </Nav>
                </nav>
            </div>
        </HeaderS>
    );
};

export default Header;
