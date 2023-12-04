import tw from "twin.macro";

export const FeatureContainer = tw.div`
 flex 
 w-full 
 h-auto 
 [transition: all 1s]`;

export const FeatureSep = tw.div`w-[3px] 
 h-auto 
 rounded-[5px] 
 bg-blue-400
 cursor-pointer `;

export const FeatureBodyContainer = tw.div`
 flex 
 flex-col 
 gap-[10px] 
 h-fit 
 justify-start 
 items-start`;

export const FeatureImg = tw.img`
 w-[40px] 
 ml-[18px]`;

export const FeatureHeading = tw.h4`
 font-inter 
 text-[18px] 
 [padding: 0 24px] 
 cursor-pointer 
 capitalize 
 [font-weight: 600]`;

export const FeatureDescripton = tw.div`
 overflow-hidden  
 [padding: 0 24px] 
 flex 
 flex-col 
 justify-start 
 items-start 
 gap-[10px]`;
