import { createContext, useContext, useState } from "react";
import { ProjectType } from "../../types/projects.type";

type Props = {
  children: React.ReactNode;
};

interface ProjectContextType {
  project: ProjectType;
  setProject: (project: ProjectType) => void;
}

const ProjectContext = createContext<ProjectContextType>({
  project: null,
  setProject: (project: ProjectType) => {
    void project;
  },
});

const ProjectContextProvider = ({ children }: Props) => {
  const [project, setProject] = useState<ProjectType>(null);
  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = (): ProjectContextType => {
  const context = useContext<ProjectContextType>(ProjectContext);
  if (context == undefined) {
    throw new Error("project conetxt used outside of its provider.");
  }
  return context;
};

export default ProjectContextProvider;
