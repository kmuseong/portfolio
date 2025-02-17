import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext.jsx';
import { ThemeProviderWrapper } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/portfolio">
        <ThemeProviderWrapper>
            <ProjectProvider>
                <App />
            </ProjectProvider>
        </ThemeProviderWrapper>
    </BrowserRouter>
);
