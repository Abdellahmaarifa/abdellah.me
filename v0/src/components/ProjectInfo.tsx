import tw from "twin.macro";
import ViewMoreBtn from "./ViewMoreBtn";
import { useProjectContext } from "../context/Project";
import {
  ProjectInfoCaption,
  ProjectInfoContainer,
  ProjectInfoDes,
  ProjectInfoDesContainer,
  ProjectInfoImg,
  ProjectInfoName,
  ProjectInfoNameContainer,
  ProjectInfoStack,
  ProjectInfoTech,
} from "../styles/ProjectInfo.style";

const ProjectInfo = () => {
  const { project } = useProjectContext();
  return (
    <ProjectInfoContainer
      onClick={(e) => e.stopPropagation()}
      style={{
        opacity: project ? "100%" : "0",
        transition: project ? "opacity 1s " : "none",
      }}
    >
      <ProjectInfoCaption>
        <ProjectInfoImg>
          <img src={project?.image} alt="" />
        </ProjectInfoImg>
        <ProjectInfoNameContainer>
          <ProjectInfoName>{project?.name}</ProjectInfoName>
          {project?.stack.map((el, i) => {
            return (
              <ProjectInfoStack key={i}>
                <ProjectInfoTech>{el}</ProjectInfoTech>
              </ProjectInfoStack>
            );
          })}
        </ProjectInfoNameContainer>
      </ProjectInfoCaption>
      <ProjectInfoDesContainer>
        <ProjectInfoDes>{project?.description}</ProjectInfoDes>
        <ViewMoreBtn
          text="view the full subject"
          size="sm"
          link={project?.subjectLink}
        />
        <ViewMoreBtn
          text="view my implementation"
          size="sm"
          link={project?.githubLink}
        />
      </ProjectInfoDesContainer>
    </ProjectInfoContainer>
  );
};

export default ProjectInfo;
