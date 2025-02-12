import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import LoadingScreen from './components/LoadingScreen';
import { useState } from 'react';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:projectName" element={<ProjectDetailPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
