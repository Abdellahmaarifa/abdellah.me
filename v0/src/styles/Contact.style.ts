import tw from "twin.macro";

export const ContactConatiner = tw.div`
 p-[20px] 
 flex 
 flex-col 
 justify-center 
 items-center  
 gap-[20px] 
 w-full 
 text-white
`;

export const ContactHeader = tw.h2`
 text-[28px] 
 [font-weight: 600]
`;

export const ContactCertContainer = tw.div`
 flex 
 items-center 
 justify-center 
 p-[10px] 
 gap-[15px] 
 flex-wrap 
 w-full
`;
export const ContactCert = tw.div`
 w-[90%] 
 h-auto 
 rounded-[5px] 
 bg-[#152B3D] 
 [border: 1px solid #0D558D] 
 flex 
 justify-center 
 items-start 
 gap-[15px] 
 p-[10px] 
 flex-col
`;
export const ContactCertImgContainer = tw.div`
 w-[100%] 
 h-[80%] 
 rounded-[5px] 
 flex 
 justify-center 
 items-center
`;
export const ContactCertImg = tw.img`
 h-full
`;

export const ConatctSubHeading = tw.h3`
 text-[24px] 
 [font-weight: 600]
`;

export const ContactProjectHeading = tw.div`
 m-auto 
 w-full 
 text-center mb-[32px] 
 capitalize 
 text-[25px] 
 text-white 
 font-inter 
 [font-weight: 600]
`;

export const ContactFeatures = tw.div`
 flex 
 w-full 
 flex-col 
 h-auto 
 gap-[10px]
`;

export const ContactProjectConatiner = tw.div`
 w-full 
 h-fit  
 rounded-[5px] 
 sm:[padding: 40px 0]

`;

export const ContactProjectFooter = tw.div`
 mb-[20px]
`;
