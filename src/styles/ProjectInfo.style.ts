import tw from "twin.macro";

export const ProjectInfoContainer = tw.div`
    overflow-hidden 
    w-[250px] 
    bg-[#152B3D] 
    [border: 1px solid #0D558D]
    rounded-[5px]
    fixed 
    top-[40px] 
    right-[40px] 
    flex 
    flex-col gap-[15px] p-[15px]
    [box-shadow: 2px 2px 33px 3px rgba(13,57,88,0.6)] 
    z-[10]
`;
export const ProjectInfoCaption = tw.div`
  flex 
  gap-[15px] 
  w-full
`;
export const ProjectInfoImg = tw.div`
  w-[45px] 
  h-[45px] 
  bg-[#0E314B] rounded-[5px]
  [border: 1px solid #0D558D] 
  [&>img]:w-[60%] 
  flex justify-center 
  items-center
`;
export const ProjectInfoNameContainer = tw.div`
  flex flex-col 
  gap-[5px]
`;
export const ProjectInfoName = tw.h3`
  font-inter 
  [font-weight: 600] 
  text-[16px] 
  text-white  
  w-full
`;

export const ProjectInfoStack = tw.div`
  flex gap-[5px] 
  
  w-full
`;
export const ProjectInfoTech = tw.span` 
 bg-[#0E314B] rounded-[15px]
 [padding: 0 10px] 
 text-white 
 font-inter 
 text-[10px] 
 [border: 1px solid #0D558D]
 `;
export const ProjectInfoDesContainer = tw.div`
  flex
  flex-col
  gap-[10px]
  justify-start
  items-start
`;
export const ProjectInfoDes = tw.p`
 font-inter 
 text-[12px]
 text-white
`;
