import tw from "twin.macro";
export const HeadingContainer = tw.div`
    xsm:h-[380px]
    xl:w-fit
    flex
    justify-center
    items-center
    xsm:flex-row
    flex-col
    p-[15px]
    xsm:p-0
    sm:justify-start
    sm:items-start
`;

export const HomeInfo = tw.div`
    h-full 
    flex-1 
    flex  
    justify-center 
    xsm:items-start 
    items-center  
    flex-col 
    text-[#e5e7eb] 
    font-inter 
    md:hidden 
    xl:flex
`;

export const HomeInfoHeader = tw.h2`
  lg:text-[30px] 
  xl:text-[40px] 
  font-inter 
  font-bold 
  flex 
  flex-col
`;

export const HomeInfoSubHeader = tw.h3`
  lg:text-[24px] 
  xl:text-[30px] 
  mb-[30px] 
`;

export const HomeInfoDescription = tw.p`
  xl:w-[300px]  
  text-[18px] 
  text-[#a9bbcb] 
  text-center 
  xsm:text-start
`;

export const LogoContainer = tw.div`
  xsm:w-[200px]
  xsm:h-[380px]
  p-[8px]
  relative
  flex
  flex-col
`;

export const ImgContainer = tw.div`
  h-[100px]
  w-[100px]
  rounded-[50%]
  relative
  bottom-[47px]
  left-1/2
  -translate-x-1/2
  xsm:-mt-[80px]
  overflow-hidden
`;
