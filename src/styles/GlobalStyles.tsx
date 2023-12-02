import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles, theme } from "twin.macro";

const CustomStyles = createGlobalStyle({
  html: {
    ...tw`scroll-smooth`,
  },
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
    ...tw`
      bg-[#0c1a24]
      [box-sizing: border-box]
    `,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
