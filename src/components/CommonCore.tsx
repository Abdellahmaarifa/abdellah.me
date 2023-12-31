import CircleImg1 from "../assets/circle.svg";
import CircleImg2 from "../assets/circle2.svg";
import CircleImg3 from "../assets/circle3.svg";
import CommonCoreProjects from "./CommonCoreProjects";
import Circle from "./Circle";
import tw from "twin.macro";
import ViewMoreBtn from "./ViewMoreBtn";
const CommonCore = () => {
  return (
    <CommonCoreContainer>
      <CircleContainer>
        <Circle width={100} height={100} bg={CircleImg1}>
          <CommonCoreProjects />
          <Circle width={80} height={80} bg={CircleImg2}>
            <Circle width={60} height={60} bg={CircleImg2}>
              <Circle width={40} height={40} bg={CircleImg3}></Circle>
            </Circle>
          </Circle>
        </Circle>
      </CircleContainer>
      <ViewMoreBtn
        text="View all the projects"
        link="https://github.com/Abdellahmaarifa-1337"
      />
    </CommonCoreContainer>
  );
};

const CircleContainer = tw.div`
   w-[85vw] h-[85vw] md:w-[50vw] md:h-[50vw] lg:w-[450px] lg:h-[450px] relative
`;

const CommonCoreContainer = tw.div`
    flex flex-col
    items-center
    justify-center
    gap-[20px]
    p-0
`;

export default CommonCore;
