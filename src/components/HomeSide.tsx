import Scrollspy from "react-scrollspy";
import tw from "twin.macro";
import GithubIcon from "../assets/github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import Logo from "../assets/logo.svg?react";
import ProfileImg from "../assets/profile.png";
import RightArrow from "../assets/arrow-right.svg?react";
import { useEffect, useState } from "react";

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

const HeadingContainer = tw.div`
  h-[380px]
  w-[600px]
  flex
  justify-center
  items-center
  
`;

const HomeSideContainer = tw.div`
sticky h-[90vh]  w-fit  top-[50px] flex flex-col justify-between
pb-[20px] 
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

const HomeLinks = tw.div`
  flex gap-[15px] w-full [padding: 0 40px]
`;
const HomeLinksIcon = tw.a`
  w-[25px] h-auto [&>*]:fill-[#a9bbcb] [&>*]:h-full [&>*]:w-full 
`;

const HomeNav = tw.div`
  flex flex-col gap-[20px] [padding: 0 40px] mt-[20px]  
`;
const HomeNavLinkConatainer = tw.a` flex gap-[12px] justify-center 
items-center w-fit hover:[&>div]:w-[80px]  hover:[&>div]:bg-white 
cursor-pointer hover:text-white text-[#a9bbcbae] [font-weight: 600]

`;

const HomeNavLinkIcon = tw.div`h-[1px] w-[40px] rounded bg-[#a9bbcb9e] 
[transition: all .4s] active:w-[80px]  hover:bg-white`;
const HomeNavLink = tw.span`font-inter text-[16px] hover:text-white `;

const MenuLink = ({
  link,
  activeMenuItem,
  text,
}: {
  link: string;
  activeMenuItem: string;
  text: string;
}) => {
  return (
    <HomeNavLinkConatainer
      href={`#${link}`}
      css={activeMenuItem === link ? { color: "white" } : null}
      className={activeMenuItem === link ? "active-menu" : ""}
    >
      <HomeNavLinkIcon
        css={
          activeMenuItem === link
            ? { width: "80px", background: "white" }
            : null
        }
      />
      <HomeNavLink>{text}</HomeNavLink>
    </HomeNavLinkConatainer>
  );
};
const HomeSide = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("about"); // Default active menu item

  useEffect(() => {
    const handleScroll = () => {
      // Get the positions of each section
      const aboutSection = document.getElementById("about")!.offsetTop;
      const projectSection = document.getElementById("projects")!.offsetTop;
      const contactSection = document.getElementById("contact")!.offsetTop;

      // Get the current scroll position
      const scrollPosition = window.scrollY;
      console.log("----", aboutSection);
      // Determine the active section based on scroll position
      if (scrollPosition < projectSection) {
        setActiveMenuItem("about");
      } else if (scrollPosition < contactSection) {
        setActiveMenuItem("projects");
      } else {
        setActiveMenuItem("contact");
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HomeSideContainer>
      <div>
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
              I build exceptional and accessible digital experiences for the
              web.
            </HomeInfoDescription>
            <div
              tw="mt-[20px] [font-weight: 500] font-inter flex gap-[5px] justify-center items-center 
            hover:gap-[10px] [transition: all .1s]
              hover:[&>a]:[border-bottom: 1px solid #17A2B8]
            "
            >
              <a href="" tw="">
                View full resume
              </a>
              <RightArrow tw="w-[25px] h-[25px] stroke-red-100" />
            </div>
          </HomeInfo>
        </HeadingContainer>
        <HomeNav>
          <MenuLink link="about" activeMenuItem={activeMenuItem} text="About" />
          <MenuLink
            link="projects"
            activeMenuItem={activeMenuItem}
            text="Projects"
          />
          <MenuLink
            link="contact"
            activeMenuItem={activeMenuItem}
            text="Get in touch"
          />
        </HomeNav>
      </div>
      <HomeLinks>
        <HomeLinksIcon href="#">
          <GithubIcon />
        </HomeLinksIcon>
        <HomeLinksIcon href="#">
          <LinkedinIcon />
        </HomeLinksIcon>
      </HomeLinks>
    </HomeSideContainer>
  );
};

export default HomeSide;
