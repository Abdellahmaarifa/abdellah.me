import tw from "twin.macro";

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

// Styling

const HomeNavLinkConatainer = tw.a`
    flex gap-[12px] justify-center 
    items-center w-fit hover:[&>div]:w-[80px]  hover:[&>div]:bg-white 
    cursor-pointer hover:text-white text-[#a9bbcbae] [font-weight: 600]
`;

const HomeNavLinkIcon = tw.div`
    h-[1px] w-[40px] rounded bg-[#a9bbcb9e] 
    [transition: all .4s] active:w-[80px]  hover:bg-white
`;
const HomeNavLink = tw.span`
    font-inter text-[16px] hover:text-white
`;

export default MenuLink;
