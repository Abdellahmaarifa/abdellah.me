import Scrollspy from "react-scrollspy";
import tw from "twin.macro";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const HomeSideContainer = tw.div`
sticky h-[90vh]  w-fit  top-[50px] flex flex-col justify-between
pb-[20px] 
`;

const HomeSide = () => {
  return (
    <HomeSideContainer>
      <div>
        <Header />
        <Nav />
      </div>
      <Footer />
    </HomeSideContainer>
  );
};

export default HomeSide;
