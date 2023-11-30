import tw from "twin.macro";
import HomeSide from "./components/HomeSide";

import About from "./components/About";
import CommonCore from "./components/CommonCore";
import Projects from "./components/Projects";
import ProjectContextProvider, { useProjectContext } from "./context/Project";
import ProjectInfo from "./components/ProjectInfo";
import ViewMoreBtn from "./components/ViewMoreBtn";
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
        <div
          id="contact"
          tw="p-[20px] flex flex-col justify-center items-center  w-full"
        >
          <h1>So let's be real?</h1>

          <p>
            wither you are looking for front end intern or backend intern, i can
            tell that what you are looking for is someone how can adobt and
            learn quickly to any technolgy , at the end of the day these are
            just tools that you can change at in time when you have to, i don't
            know everything, that a fact, but the fondamontal that i learn in
            1337, makes me able to adobt fast and learn anything, as a mather of
            a fact i am still learning using all the resources that availble for
            me.
          </p>
          <p>
            i like books that goes dip in to the subject, this are some of the
            books i finshed reading and i have fun:
          </p>
          <div>BOOK HERE.</div>
          <p>
            i am also taking a lot of courses that are available to me: this
            some certs :{" "}
          </p>
          <div>CERTS HERE</div>
          <h3>But Wait? How about Projects?</h3>
          <p>
            yes learning is about doing, and that's true i am alwase working on
            a new project and applying what i learn to a real application and
            trying to solve real world problems: and this is the project i am
            currently working on :
          </p>
          <div>PROJECT GOES HERE!</div>
          <p></p>
          <p>
            As you see, during my studie at the 1337 school i learnd a lot of
            concepts in many differet areas and i learned the foundational that
            let me work any kind of projects, if you find what you are looking
            for, let's get in touch, i'll be more then happy to join your team.
          </p>
          <ViewMoreBtn text="Get in touch" />
        </div>
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
