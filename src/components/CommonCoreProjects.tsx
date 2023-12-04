import ProjectIcon from "./ProjectIcon";
import { useProjectContext } from "../context/Project";
import { PROJECTS } from "../constants/Projects";

const CommonCoreProjects = () => {
  const { project, setProject } = useProjectContext();
  return (
    <>
      {/* LIBFT*/}

      <ProjectIcon
        position={{}}
        img={PROJECTS.libft?.image!}
        onClick={() => {
          setProject(PROJECTS.libft);
        }}
        active={project?.name === PROJECTS.libft?.name}
      />

      <ProjectIcon
        position={{ left: "30%", top: "center" }}
        img={PROJECTS.printf?.image!}
        onClick={() => {
          setProject(PROJECTS.printf);
        }}
        active={project?.name === PROJECTS.printf?.name}
      />

      <ProjectIcon
        position={{ left: "center", top: "30%" }}
        img={PROJECTS.getNextLine?.image!}
        onClick={() => {
          setProject(PROJECTS.getNextLine);
        }}
        active={project?.name === PROJECTS.getNextLine?.name}
      />

      <ProjectIcon
        position={{ right: "30%", top: "center" }}
        onClick={() => {
          setProject(PROJECTS.born);
        }}
        img={PROJECTS.born?.image!}
        active={project?.name === PROJECTS.born?.name}
      />

      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.pushSwap);
        }}
        position={{ left: "center", bottom: "30%" }}
        img={PROJECTS.pushSwap?.image!}
        active={project?.name === PROJECTS.pushSwap?.name}
      />

      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.solong);
        }}
        position={{ left: "25%", top: "23%" }}
        img={PROJECTS.solong?.image!}
        active={project?.name === PROJECTS.solong?.name}
      />
      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.pipex);
        }}
        position={{ right: "25%", top: "23%" }}
        img={PROJECTS.pipex?.image!}
        active={project?.name === PROJECTS.pipex?.name}
      />

      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.minishell);
        }}
        position={{ left: "15%", top: "center" }}
        img={PROJECTS.minishell?.image!}
        active={project?.name === PROJECTS.minishell?.name}
      />

      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.cube);
        }}
        position={{ right: "15%", top: "center" }}
        img={PROJECTS.cube?.image!}
        active={project?.name === PROJECTS.cube?.name}
      />

      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.philo);
        }}
        position={{ left: "25%", bottom: "23%" }}
        img={PROJECTS.philo?.image!}
        active={project?.name === PROJECTS.philo?.name}
      />
      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.netPractice);
        }}
        position={{ right: "25%", bottom: "23%" }}
        img={PROJECTS.netPractice?.image!}
        active={project?.name === PROJECTS.netPractice?.name}
      />

      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.cPlusPlus);
        }}
        position={{ left: "center", top: "15%" }}
        img={PROJECTS.cPlusPlus?.image!}
        active={project?.name === PROJECTS.cPlusPlus?.name}
      />
      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.inception);
        }}
        position={{ left: "center", bottom: "15%" }}
        img={PROJECTS.inception?.image!}
        active={project?.name === PROJECTS.inception?.name}
      />

      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.webserver);
        }}
        position={{ left: "-15px", top: "center" }}
        img={PROJECTS.webserver?.image!}
        active={project?.name === PROJECTS.webserver?.name}
      />
      <ProjectIcon
        onClick={() => {
          setProject(PROJECTS.transadence);
        }}
        position={{ right: "-15px", top: "center" }}
        img={PROJECTS.transadence?.image!}
        active={project?.name === PROJECTS.transadence?.name}
      />
    </>
  );
};

/*
     
      */
export default CommonCoreProjects;
