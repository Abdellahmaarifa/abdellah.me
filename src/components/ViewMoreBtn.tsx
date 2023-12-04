import { CSSProperties } from "react";
import RightArrow from "../assets/arrow-right.svg?react";
import tw from "twin.macro";
import { ActionBtnContainer } from "../styles/ViewMoreBtn.style";

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
      <a href={link} target="_blank">
        {text}
      </a>
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

export default ViewMoreBtn;
