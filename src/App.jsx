import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Layout from './components/Layout';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:projectName" element={<ProjectDetailPage />} />
            </Route>
        </Routes>
    );
};

export default App;
