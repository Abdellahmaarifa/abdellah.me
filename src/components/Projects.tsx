import tw from "twin.macro";
import Project from "./Project";
import OverPing from "../assets/overping.png";
import WebServer from "../assets/webserverbg.png";
import Minishell from "../assets/minishellbg.png";

const Projects = () => {
  return (
    <ProjectsConatiner id="projects">
      <Project
        link="https://github.com/Abdellahmaarifa/overPing"
        img={OverPing}
        col={true}
        name="OverPing (aka ft_transcendence)"
        description="a single web application as an online pong game, where users can play, chat, create channels, and all the other functional features like updating profile, send/receive friend request, block/unblock user...
        In my role as a front-end developer, I used React with TypeScript to improve the  code integrity. Embracing the Clean Architecture principles and following the MVVM pattern, I aimed for a structured and maintainable codebase. Additionally, I utilized Tailwind CSS and Styled Components with Twin Micro for efficient styling.
        "
        stack={["Typescript", "React", "Apollo", "styled-component", "CSS"]}
      />
      <Project
        col={false}
        link="https://github.com/Abdellahmaarifa/webServer"
        img={WebServer}
        name="HTTP web server"
        description="a simple a http server like nginx that store, process, and deliver web pages to clients via http, it is capable of handling GET/POST/DELETE request."
        stack={["C++"]}
      />
      <Project
        col={false}
        link="https://github.com/Abdellahmaarifa-1337/minishell"
        img={Minishell}
        name="Minishell"
        description="a simple like bash program that communicate with the kernel  using interactive lines of commands like : cd, ls , and the most loved one git."
        stack={["C"]}
      />
    </ProjectsConatiner>
  );
};

const ProjectsConatiner = tw.div`
    flex flex-col gap-[15px]
`;

export default Projects;
