import tw from "twin.macro";
import HomeSide from "./components/HomeSide";
import Circle from "./assets/circle.svg";
import Circle2 from "./assets/circle2.svg";
import Circle3 from "./assets/circle3.svg";
import ToolIcon from "./assets/tool-box.png";
import GetNextLineIcon from "./assets/get_next_line_icon.png";
import PrintfIcon from "./assets/printf.png";
import BornIcon from "./assets/born.png";
import SolongIcon from "./assets/so_long.png";
import PipexIcon from "./assets/pipex.png";
import PushSwapIcon from "./assets/push_swap.png";
import MinishellIcon from "./assets/minishell.png";
import CubeIcon from "./assets/cube3d.png";
import NetPracticeIcon from "./assets/netpractice.png";
import CPlusPlusIcon from "./assets/c++.png";
import InceptionIcon from "./assets/inception.png";
import WebserverIcon from "./assets/webserver.png";
import TransadenceIcon from "./assets/transandence.png";
import PhiloIcon from "./assets/philosopher.png";

import { CSSProperties } from "react";

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

const Project = ({ style, img }: { style: CSSProperties; img: string }) => {
  return (
    <div
      tw="w-[35px] h-[35px] bg-[#152B3D] absolute  border-[#0D5287] border-[1px] border-solid rounded-[8px] justify-center items-center flex"
      style={style}
    >
      <img src={img} tw="w-[60%]" />
    </div>
  );
};

const CommonCore = () => {
  return (
    <div
      tw="h-[450px]  w-[450px] rounded-[50%] flex justify-center items-center relative"
      style={{
        background: `center/cover url(${Circle})`,
      }}
    >
      {/* LIBFT*/}
      <Project style={{}} img={ToolIcon} />
      {/* printf*/}
      <Project
        style={{ left: "30%", top: "50%", transform: "translateY(-50%)" }}
        img={PrintfIcon}
      />
      {/* get next line*/}
      <Project
        style={{ left: "50%", top: "30%", transform: "translateX(-50%)" }}
        img={GetNextLineIcon}
      />

      {/* born to be root*/}
      <Project
        style={{ right: "30%", top: "50%", transform: "translateY(-50%)" }}
        img={BornIcon}
      />

      {/* push swap*/}
      <Project
        style={{ left: "50%", bottom: "30%", transform: "translateX(-50%)" }}
        img={PushSwapIcon}
      />

      {/* pipex*/}
      <Project style={{ left: "25%", top: "23%" }} img={SolongIcon} />
      {/* so long*/}
      <Project style={{ right: "25%", top: "23%" }} img={PipexIcon} />

      {/* pipex*/}
      <Project
        style={{ left: "15%", top: "50%", transform: "translateY(-50%)" }}
        img={MinishellIcon}
      />
      {/* so long*/}
      <Project
        style={{ right: "15%", top: "50%", transform: "translateY(-50%)" }}
        img={CubeIcon}
      />

      {/* pipex*/}
      <Project style={{ left: "25%", bottom: "23%" }} img={PhiloIcon} />
      {/* so long*/}
      <Project style={{ right: "25%", bottom: "23%" }} img={NetPracticeIcon} />

      {/* pipex*/}
      <Project
        style={{ left: "50%", top: "15%", transform: "translateX(-50%)" }}
        img={CPlusPlusIcon}
      />
      {/* so long*/}
      <Project
        style={{ left: "50%", bottom: "15%", transform: "translateX(-50%)" }}
        img={InceptionIcon}
      />

      {/* pipex*/}
      <Project
        style={{ left: "-15px", top: "50%", transform: "translateY(-50%)" }}
        img={WebserverIcon}
      />
      {/* so long*/}
      <Project
        style={{ right: "-15px", top: "50%", transform: "translateY(-50%)" }}
        img={TransadenceIcon}
      />
      <div
        tw="h-[80%]  w-[80%] rounded-[50%] flex justify-center items-center relative"
        style={{
          background: `center/cover url(${Circle2})`,
        }}
      >
        <div
          tw="h-[60%]  w-[60%] rounded-[50%] flex justify-center items-center"
          style={{
            background: `center/cover url(${Circle2})`,
          }}
        >
          <div
            tw="h-[40%]  w-[40%] rounded-[50%]"
            style={{
              background: `center/cover url(${Circle3})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <HomeContainer>
      <HomeSide />
      <div
        id="about"
        tw="h-full w-[800px] flex flex-col gap-[20px] p-[80px] justify-center items-center"
      >
        <div tw="w-full ">
          <p tw="text-[#a9bbcb] text-[17px] flex flex-col gap-[12px]">
            <span>
              As a software developer, I started the infinite loop of learning,
              coding, and debugging two years ago, and during this period I've
              completed many projects that meet together to build the
              foundational of programming, that is what the common core in 1337
              is all about, by the time i adopt my own mental model for
              programming, and i am looking to apply my knowledge into scalable
              solutions in the ever-evolving landscape of software development.
            </span>
            <span>
              As a software developer, I started the infinite loop of learning,
              coding, and debugging two years ago, and during this period I've
              completed many projects that meet together to build the
              foundational of programming, that is what the common core in 1337
              is all about, by the time i adopt my own mental model for
              programming, and i am looking to apply my knowledge into scalable
              solutions in the ever-evolving landscape of software development.
            </span>
            <span>
              As a software developer, I started the infinite loop of learning,
              coding, and debugging two years ago, and during this period I've
              completed many projects that meet together to build the
              foundational of programming, that is what the common core in 1337
              is all about, by the time i adopt my own mental model for
              programming, and i am looking to apply my knowledge into scalable
              solutions in the ever-evolving landscape of software development.
            </span>
          </p>
        </div>

        <CommonCore />
        <div
          id="projects"
          tw=" flex w-full gap-[15px] [padding: 15px 20px] rounded-[5px] hover:bg-[#152b3d22] hover:border-[#0d528721] hover:border-[1px] hover:border-solid"
        >
          <div tw="w-[30%] h-[80px] rounded-[5px] border-solid border-[1px] border-[#0d528721]"></div>
          <div tw="flex flex-col w-[100%] [padding: 0 10px] gap-[10px]">
            <h2 tw="text-[16px] text-[#e7e5eb] capitalize font-inter font-bold">
              name of the project+link
            </h2>
            <p tw="text-[#a9bbcb] text-[16px] font-inter w-full">
              As a software developer, I started the infinite loop of learning,
              coding, and debugging two years ago, and during this period I've
              completed many projects that meet together to build the
              foundational of programming
            </p>
            <div tw="flex gap-[10px]">
              <span tw="text-[#5495C6] font-inter capitalize text-[14px] bg-[#124a7576] rounded-[15px] [padding: 5px 15px]">
                HTML
              </span>
              <span tw="text-[#5495C6] font-inter capitalize text-[14px] bg-[#124a7576] rounded-[15px] [padding: 5px 15px]">
                CSS
              </span>
            </div>
          </div>
        </div>

        <div id="contact" tw="h-[1000px]  w-full"></div>
      </div>
    </HomeContainer>
  );
};

export default App;
