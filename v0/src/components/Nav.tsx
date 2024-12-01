import { useEffect, useState } from "react";
import tw from "twin.macro";
import MenuLink from "./MenuLink";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("about"); // Default active menu item

  useEffect(() => {
    const handleScroll = () => {
      // Get the positions of each section
      const aboutSection = document.getElementById("about")!.offsetTop - 20;
      const projectSection = document.getElementById("projects")!.offsetTop;
      const contactSection = document.getElementById("contact")!.offsetTop;

      // Get the current scroll position
      const scrollPosition = window.scrollY;
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
  );
};

const HomeNav = tw.nav`
  md:flex flex-col gap-[20px] [padding: 0 40px] mt-[20px]  hidden
`;

export default Nav;
