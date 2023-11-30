import tw from "twin.macro";
import Project from "./Project";

const Projects = () => {
  return (
    <ProjectsConatiner id="projects">
      <Project
        img=""
        name="Libft, introduction to c programming."
        description="As a software developer, I started the infinite loop of learning,
          coding, and debugging two years ago, and during this period I've
          completed many projects that meet together to build the foundational
          of programming"
        stack={["HTML", "CSS", "JS"]}
      />
      <Project
        img=""
        name="Libft, introduction to c programming."
        description="As a software developer, I started the infinite loop of learning,
          coding, and debugging two years ago, and during this period I've
          completed many projects that meet together to build the foundational
          of programming"
        stack={["HTML", "CSS", "JS"]}
      />
      <Project
        img=""
        name="Libft, introduction to c programming."
        description="As a software developer, I started the infinite loop of learning,
          coding, and debugging two years ago, and during this period I've
          completed many projects that meet together to build the foundational
          of programming"
        stack={["HTML", "CSS", "JS"]}
      />
    </ProjectsConatiner>
  );
};

const ProjectsConatiner = tw.div`
    flex flex-col gap-[15px]
`;

export default Projects;
