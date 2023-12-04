import tw from "twin.macro";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectImgConatiner,
  ProjectInfoContainer,
  ProjectName,
  ProjectStack,
  ProjectTech,
} from "../styles/Project.style";
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
          {stack.map((el, i) => {
            return <ProjectTech key={i}>{el}</ProjectTech>;
          })}
        </ProjectStack>
      </ProjectInfoContainer>
    </ProjectContainer>
  );
};

// Styling

export default Project;
