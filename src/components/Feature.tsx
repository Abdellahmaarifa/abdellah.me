import { MouseEventHandler } from "react";
import ViewMoreBtn from "./ViewMoreBtn";
import {
  FeatureBodyContainer,
  FeatureContainer,
  FeatureDescripton,
  FeatureHeading,
  FeatureImg,
  FeatureSep,
} from "../styles/Feature.style";

const Feature = ({
  on,
  title,
  description,
  actionText,
  link,
  icon,
  onClick,
}: {
  on: boolean;
  title: string;
  description: string;
  actionText: string;
  link: string;
  icon: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <FeatureContainer onClick={onClick}>
      <FeatureSep
        style={{
          background: on ? "rgb(96 165 250" : "#33424E",
          transition: "all 1s",
        }}
      ></FeatureSep>
      <FeatureBodyContainer
        style={{
          padding: on ? "8px 0" : 0,
        }}
      >
        <FeatureImg
          src={icon}
          alt=""
          style={{
            height: on ? "auto" : 0,
          }}
        />

        <FeatureHeading
          style={{
            color: on ? "white" : "#E5E7EB",
          }}
        >
          {title}
        </FeatureHeading>
        <FeatureDescripton
          tw="overflow-hidden  [padding: 0 24px] 
            flex flex-col justify-start items-start gap-[10px]"
          style={{
            height: on ? "fit-content" : 0,
            transition: "all .4s",
          }}
        >
          <p tw="">{description}</p>
          <ViewMoreBtn text={actionText} link={link} />
        </FeatureDescripton>
      </FeatureBodyContainer>
    </FeatureContainer>
  );
};

export default Feature;
