import { createContext, useState, useContext } from 'react';

// 프로젝트 데이터 상태를 전역으로 관리
const ProjectContext = createContext();

export const useProject = () => {
    return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
    const [projectData, setProjectData] = useState({});

    const updateProjectData = (data) => {
        setProjectData(data);
    };

    return <ProjectContext.Provider value={{ projectData, updateProjectData }}>{children}</ProjectContext.Provider>;
};
