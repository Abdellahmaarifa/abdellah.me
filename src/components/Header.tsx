import { css } from "twin.macro";
import tw from "twin.macro";
import Logo from "../assets/logo.svg?react";
import ProfileImg from "../assets/profile.png";
import ViewMoreBtn from "./ViewMoreBtn";
import {
  HeadingContainer,
  HomeInfo,
  HomeInfoDescription,
  HomeInfoHeader,
  HomeInfoSubHeader,
  ImgContainer,
  LogoContainer,
} from "../styles/Header.style";

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
          I develop efficient web solutions for a seamless user experience
        </HomeInfoDescription>
        <ViewMoreBtn
          text="View full resume"
          style={{
            marginTop: "20px",
          }}
          link="/resume.pdf"
        />
      </HomeInfo>
    </HeadingContainer>
  );
};

export default Header;
