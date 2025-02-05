import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
    height: 100%;
`;

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default Layout;
