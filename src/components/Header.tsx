import { css } from "twin.macro";
import tw from "twin.macro";
import Logo from "../assets/logo.svg?react";
import ProfileImg from "../assets/profile.png";
import ViewMoreBtn from "./ViewMoreBtn";

const Header = () => {
  return (
    <HeadingContainer>
      <LogoContainer>
        <Logo tw="w-full h-full fill-[#122634] hidden xsm:block" />
        <ImgContainer>
          <img src={ProfileImg} tw="xsm:absolute xsm:top-0 relative" />
        </ImgContainer>
      </LogoContainer>

      <HomeInfo>
        <HomeInfoHeader>
          <span>Hello,</span>
          <span>
            <span>I am </span>
            <span tw="text-[#17a2b8]">Abdellah</span>
          </span>
        </HomeInfoHeader>
        <HomeInfoSubHeader>a Software Developer</HomeInfoSubHeader>
        <HomeInfoDescription>
          I build exceptional and accessible digital experiences for the web.
        </HomeInfoDescription>
        <ViewMoreBtn
          text="View full resume"
          style={{
            marginTop: "20px",
          }}
        />
      </HomeInfo>
    </HeadingContainer>
  );
};

//styling
const HeadingContainer = tw.div`
    xsm:h-[380px]
    xl:w-fit
    flex
    justify-center
    items-center
    xsm:flex-row
    flex-col
    p-[15px]
    xsm:p-0
    sm:justify-start
    sm:items-start
`;

const HomeInfo = tw.div`
    h-full flex-1 flex  justify-center xsm:items-start items-center  flex-col text-[#e5e7eb] font-inter md:hidden xl:flex
`;

const HomeInfoHeader = tw.h2`
    lg:text-[30px] xl:text-[40px] font-inter font-bold flex flex-col
`;
const HomeInfoSubHeader = tw.h3`
    lg:text-[24px] xl:text-[30px] mb-[30px] 
`;
const HomeInfoDescription = tw.p`
    xl:w-[300px]  text-[18px] text-[#a9bbcb] text-center xsm:text-start
`;

const LogoContainer = tw.div`
    xsm:w-[200px]
    xsm:h-[380px]
    p-[8px]
    relative
    flex
    flex-col

`;

const ImgContainer = tw.div`
    h-[100px]
    w-[100px]
    rounded-[50%]
    relative
    bottom-[47px]
    left-1/2
    -translate-x-1/2
    xsm:-mt-[80px]
    overflow-hidden
    

`;

export default Header;
