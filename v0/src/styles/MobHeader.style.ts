import tw from "twin.macro";

export const HeadingContainer = tw.div`
    xsm:h-[380px]
    xl:w-[600px]
    flex
    justify-center
    items-center
    xsm:flex-row
    flex-col
    p-[15px]
    xsm:p-0
    lg:hidden
    md:h-fit
`;

export const HomeInfo = tw.div`
    h-full flex-1 flex  justify-center xsm:items-start items-center  flex-col text-[#e5e7eb] font-inter lg:hidden xl:flex
`;

export const HomeInfoHeader = tw.h2`
    text-[18px] xsm:text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[40px] font-inter font-bold 
`;
export const HomeInfoSubHeader = tw.h3`
    text-[14px] xsm:text-[15px] sm:text-[18px] lg:text-[24px] xl:text-[30px] mb-[30px] 
`;
export const HomeInfoDescription = tw.p`
    text-[16px] xl:w-[300px]  xsm:text-[18px] text-[#a9bbcb] text-center xsm:text-start w-[80%]
`;

export const LogoContainer = tw.div`
    xsm:w-[200px]
    xsm:h-[380px]
    p-[8px]
    relative
    flex
    flex-col
    md:hidden
`;

export const ImgContainer = tw.div`
    h-[100px]
    w-[100px]
    rounded-[50%]
    relative
    xsm:bottom-[47px]
    left-1/2
    -translate-x-1/2
    mb-[10px]
    xsm:mb-0
    xsm:-mt-[80px]
    overflow-hidden
    

`;
