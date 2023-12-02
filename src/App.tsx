import tw from "twin.macro";
import HomeSide from "./components/HomeSide";

import About from "./components/About";
import CommonCore from "./components/CommonCore";
import ProjectInfo from "./components/ProjectInfo";
import Projects from "./components/Projects";
import ViewMoreBtn from "./components/ViewMoreBtn";
import { useProjectContext } from "./context/Project";
import Conatct from "./components/Contact";
import Header from "./components/Header";
import MobHeader from "./components/MobHeader";

const HomeContainer = tw.div`
  bg-[#0c1a24]
  h-full
  w-screen
  max-w-[1200px]
  [padding: 40px 0]
  justify-between
  flex
  items-start
  flex-col
  md:flex-row
  min-h-screen
  m-auto
  md:gap-[40px]

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
        <MobHeader />
        <About />
        <CommonCore />
        <Projects />
        <Conatct />
      </Body>
      <ProjectInfo />
    </HomeContainer>
  );
};

// Styling

const Body = tw.div`
  h-full overflow-hidden  flex-1 flex flex-col gap-[60px]   md:[padding: 60px 40px 0 40px] justify-center items-center m-auto
`;

export default App;
