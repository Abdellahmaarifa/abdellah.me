import tw from "twin.macro";

export const ProjectContainer = tw.div`
    flex flex-col sm:flex-row  w-full gap-[15px] [padding: 10px] sm:[padding: 15px 20px] rounded-[5px] hover:bg-[#152b3d22] hover:border-[#0d528721] hover:border-[1px] hover:border-solid
`;

export const ProjectImgConatiner = tw.img`
    w-[100%] sm:w-[30%] h-fit p-[5px] rounded-[5px] border-solid border-[1px] border-[#0d528721] cursor-pointer
`;
export const ProjectInfoContainer = tw.div`
    flex flex-col w-[100%] [padding: 0 10px] gap-[10px]
`;
export const ProjectName = tw.a`
    text-[16px] text-[#e7e5eb] capitalize font-inter font-bold cursor-pointer
`;
export const ProjectDescription = tw.p`
    text-[#a9bbcb] text-[16px] font-inter w-full
`;
export const ProjectStack = tw.div`
    flex gap-[10px] flex-wrap
`;
export const ProjectTech = tw.span`
    text-[#5495C6] font-inter capitalize text-[14px] bg-[#124a7576] rounded-[15px] [padding: 5px 15px]
`;
