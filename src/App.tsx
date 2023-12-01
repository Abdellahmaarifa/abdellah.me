import tw from "twin.macro";
import HomeSide from "./components/HomeSide";

import About from "./components/About";
import CommonCore from "./components/CommonCore";
import ProjectInfo from "./components/ProjectInfo";
import Projects from "./components/Projects";
import ViewMoreBtn from "./components/ViewMoreBtn";
import { useProjectContext } from "./context/Project";
import Conatct from "./components/Contact";

const HomeContainer = tw.div`
  bg-[#0c1a24]
  h-full
  w-screen
  [padding: 40px 300px]
  justify-between
  flex
  items-start
  flex-row
  min-h-screen
`;

const App = () => {
  const { project, setProject } = useProjectContext();
  return (
    <HomeContainer
      onClick={(e) => {
        setProject(null);
      }}
    >
      <HomeSide />
      <Body>
        <About />
        <CommonCore />
        <Projects />
        <Conatct />
      </Body>
      {project && <ProjectInfo />}
    </HomeContainer>
  );
};

// Styling

const Body = tw.div`
  h-full w-[800px] flex flex-col gap-[60px] p-[80px] justify-center items-center
`;

export default App;
