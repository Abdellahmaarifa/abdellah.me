import tw from "twin.macro";
const Project = ({
  img,
  name,
  description,
  stack,
}: {
  img: string;
  name: string;
  description: string;
  stack: string[];
}) => {
  return (
    <ProjectContainer>
      <ProjectImgConatiner src={img}></ProjectImgConatiner>
      <ProjectInfoContainer>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>
          {stack.map((el) => {
            return <ProjectTech>{el}</ProjectTech>;
          })}
        </ProjectStack>
      </ProjectInfoContainer>
    </ProjectContainer>
  );
};

// Styling

const ProjectContainer = tw.div`
    flex w-full gap-[15px] [padding: 15px 20px] rounded-[5px] hover:bg-[#152b3d22] hover:border-[#0d528721] hover:border-[1px] hover:border-solid
`;

const ProjectImgConatiner = tw.img`
    w-[30%] h-[80px] rounded-[5px] border-solid border-[1px] border-[#0d528721]
`;
const ProjectInfoContainer = tw.div`
    flex flex-col w-[100%] [padding: 0 10px] gap-[10px]
`;
const ProjectName = tw.h2`
    text-[16px] text-[#e7e5eb] capitalize font-inter font-bold
`;
const ProjectDescription = tw.p`
    text-[#a9bbcb] text-[16px] font-inter w-full
`;
const ProjectStack = tw.div`
    flex gap-[10px]
`;
const ProjectTech = tw.span`
    text-[#5495C6] font-inter capitalize text-[14px] bg-[#124a7576] rounded-[15px] [padding: 5px 15px]
`;

export default Project;
