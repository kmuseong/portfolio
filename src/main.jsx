import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './hooks/ProjectContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/portfolio">
        <ProjectProvider>
            <App />
        </ProjectProvider>
    </BrowserRouter>
);
