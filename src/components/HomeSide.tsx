import Scrollspy from "react-scrollspy";
import tw from "twin.macro";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

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

const HomeSideContainer = tw.div`
  md:sticky 
  md:h-[90vh]  
  min-w-[270px]  
  w-fit 
  top-[50px] 
  hidden 
  md:flex 
  flex-col 
  md:justify-between 
  pb-[20px] 
`;
export default HomeSide;
