import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ResumePage from '../pages/ResumePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:projectName" element={<ProjectDetailPage />} />
            </Route>
        </Routes>
    );
};

export default Router;
