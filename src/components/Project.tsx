import tw from "twin.macro";
const Project = ({
  img,
  name,
  description,
  stack,
  link,
  col,
}: {
  img: string;
  name: string;
  description: string;
  stack: string[];
  link: string;
  col: boolean;
}) => {
  return (
    <ProjectContainer>
      {!col && (
        <ProjectImgConatiner
          src={img}
          onClick={() => window.location.assign(link)}
        ></ProjectImgConatiner>
      )}
      <ProjectInfoContainer>
        <ProjectName href={link} target="_blank">
          {name}
        </ProjectName>
        {col && (
          <ProjectImgConatiner
            src={img}
            onClick={() => window.location.assign(link)}
            style={{
              width: "80%",
              margin: "20px auto",
            }}
          ></ProjectImgConatiner>
        )}
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
    flex flex-col sm:flex-row  w-full gap-[15px] [padding: 10px] sm:[padding: 15px 20px] rounded-[5px] hover:bg-[#152b3d22] hover:border-[#0d528721] hover:border-[1px] hover:border-solid
`;

const ProjectImgConatiner = tw.img`
    w-[100%] sm:w-[30%] h-fit p-[5px] rounded-[5px] border-solid border-[1px] border-[#0d528721] cursor-pointer
`;
const ProjectInfoContainer = tw.div`
    flex flex-col w-[100%] [padding: 0 10px] gap-[10px]
`;
const ProjectName = tw.a`
    text-[16px] text-[#e7e5eb] capitalize font-inter font-bold cursor-pointer
`;
const ProjectDescription = tw.p`
    text-[#a9bbcb] text-[16px] font-inter w-full
`;
const ProjectStack = tw.div`
    flex gap-[10px] flex-wrap
`;
const ProjectTech = tw.span`
    text-[#5495C6] font-inter capitalize text-[14px] bg-[#124a7576] rounded-[15px] [padding: 5px 15px]
`;

export default Project;
