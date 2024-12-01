import tw from "twin.macro";

import GithubIcon from "../assets/github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";

const Footer = () => {
  return (
    <HomeLinks>
      <HomeLinksIcon href="https://github.com/Abdellahmaarifa">
        <GithubIcon />
      </HomeLinksIcon>
      <HomeLinksIcon href="https://www.linkedin.com/in/abdellah-maarifa/">
        <LinkedinIcon />
      </HomeLinksIcon>
    </HomeLinks>
  );
};

// Styling
const HomeLinks = tw.footer`
  flex 
  gap-[15px] 
  w-full  
  [padding: 0 40px]
`;
const HomeLinksIcon = tw.a`
  w-[25px] 
  h-auto 
  [&>*]:fill-[#a9bbcb] 
  [&>*]:h-full 
  [&>*]:w-full 
`;

export default Footer;
