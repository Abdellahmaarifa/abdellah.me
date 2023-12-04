import tw from "twin.macro";
import {
  HomeNavLink,
  HomeNavLinkConatainer,
  HomeNavLinkIcon,
} from "../styles/MenuLink.style";

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

export default MenuLink;
