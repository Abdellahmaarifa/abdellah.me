import Scrollspy from "react-scrollspy";
import tw from "twin.macro";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const HomeSideContainer = tw.div`
md:sticky md:h-[90vh]  min-w-[270px]  w-fit top-[50px] hidden md:flex flex-col md:justify-between 
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
