import tw from "twin.macro";

export const ActionBtnContainer = tw.div`
  [font-weight: 500] 
  font-inter 
  flex 
  gap-[5px] 
  justify-center 
  items-center 
  hover:gap-[10px] 
  [transition: all .1s]
  hover:[&>a]:[border-bottom: 1px solid #17A2B8]
  text-white 
  cursor-pointer
`;
