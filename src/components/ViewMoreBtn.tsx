import { CSSProperties } from "react";
import RightArrow from "../assets/arrow-right.svg?react";
import tw from "twin.macro";

const ViewMoreBtn = ({
  text,
  link,
  style,
  size,
}: {
  text: string;
  link?: string;
  style?: CSSProperties;
  size?: "sm" | "lg";
}) => {
  return (
    <ActionBtnContainer
      style={{ ...style, fontSize: size == "sm" ? "12px" : "16px" }}
    >
      <a href={link}>{text}</a>
      <RightArrow
        tw="stroke-red-100"
        style={{
          width: size === "sm" ? "15px" : "25px",
          height: size === "sm" ? "15px" : "25px",
        }}
      />
    </ActionBtnContainer>
  );
};

const ActionBtnContainer = tw.div`
     [font-weight: 500] font-inter flex gap-[5px] justify-center items-center 
    hover:gap-[10px] [transition: all .1s]
    hover:[&>a]:[border-bottom: 1px solid #17A2B8]
    text-white cursor-pointer
`;

export default ViewMoreBtn;
