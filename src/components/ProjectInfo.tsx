import tw from "twin.macro";
import ViewMoreBtn from "./ViewMoreBtn";
import PipexIcon from "../assets/pipex.png";
import { useProjectContext } from "../context/Project";

const ProjectInfo = () => {
  const { project } = useProjectContext();
  return (
    <ProjectInfoContainer onClick={(e) => e.stopPropagation()}>
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

const ProjectInfoContainer = tw.div`
    w-[250px]  bg-[#152B3D] 
    [border: 1px solid #0D558D]
    rounded-[5px]
    fixed top-[40px] right-[40px] flex flex-col gap-[15px] p-[15px]
    [box-shadow: 2px 2px 33px 3px rgba(13,57,88,0.6)]
    `;
const ProjectInfoCaption = tw.div`
  flex gap-[15px] w-full
`;
const ProjectInfoImg = tw.div`
  w-[45px] h-[45px] bg-[#0E314B] rounded-[5px]
  [border: 1px solid #0D558D] [&>img]:w-[60%] flex justify-center items-center
`;
const ProjectInfoNameContainer = tw.div`
  flex flex-col gap-[5px]
`;
const ProjectInfoName = tw.h3`
  font-inter [font-weight: 600] text-[16px] text-white  w-full
`;

const ProjectInfoStack = tw.div`
  flex gap-[5px] w-full
`;
const ProjectInfoTech = tw.span` bg-[#0E314B] rounded-[15px]
 [padding: 0 10px] text-white font-inter text-[10px] 
 [border: 1px solid #0D558D]
 `;
const ProjectInfoDesContainer = tw.div`
 
  flex
  flex-col
  gap-[10px]
  justify-start
  items-start
`;
const ProjectInfoDes = tw.p`
font-inter 
text-[12px]
text-white
`;

export default ProjectInfo;
