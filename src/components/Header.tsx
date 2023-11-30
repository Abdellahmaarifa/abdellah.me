import { css } from "twin.macro";
import tw from "twin.macro";
import Logo from "../assets/logo.svg?react";
import ProfileImg from "../assets/profile.png";
import ViewMoreBtn from "./ViewMoreBtn";

const Header = () => {
  return (
    <HeadingContainer>
      <LogoContainer>
        <Logo tw="w-full h-full fill-[#122634]" />
        <ImgContainer>
          <img src={ProfileImg} tw="absolute top-0" />
        </ImgContainer>
      </LogoContainer>

      <HomeInfo>
        <HomeInfoHeader>
          Hello, I'am <span tw="text-[#17a2b8]">Abdellah</span>
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
    h-[380px]
    w-[600px]
    flex
    justify-center
    items-center
`;

const HomeInfo = tw.div`
    h-full flex-1 flex justify-center items-start flex-col text-[#e5e7eb] font-inter 
`;

const HomeInfoHeader = tw.h2`
    text-[40px] font-inter font-bold
`;
const HomeInfoSubHeader = tw.h3`
    text-[30px] mb-[30px]
`;
const HomeInfoDescription = tw.p`
    w-[300px] text-[18px] text-[#a9bbcb]
`;

const LogoContainer = tw.div`
    w-[200px]
    h-[380px]
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
    -mt-[80px]
    overflow-hidden
    p-[px]
`;

export default Header;
