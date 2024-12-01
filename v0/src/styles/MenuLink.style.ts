import tw from "twin.macro";
export const HomeNavLinkConatainer = tw.a`
  flex 
  gap-[12px] 
  justify-center 
  items-center 
  w-fit hover:[&>div]:w-[80px]  
  hover:[&>div]:bg-white 
  cursor-pointer 
  hover:text-white 
  text-[#a9bbcbae] 
  [font-weight: 600]
`;

export const HomeNavLinkIcon = tw.div`
  h-[1px] 
  w-[40px] 
  rounded 
  bg-[#a9bbcb9e] 
  [transition: all .4s] 
  active:w-[80px]  
  hover:bg-white
`;
export const HomeNavLink = tw.span`
  font-inter 
  text-[16px] 
  hover:text-white
`;
