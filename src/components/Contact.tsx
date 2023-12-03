import ViewMoreBtn from "./ViewMoreBtn";

import IdeaIcon from "../assets/idea.png";
import MotivationIcon from "../assets/motivation.png";
import StateICon from "../assets/state.png";
import BookImg from "../assets/book.jpg";
import CertImg from "../assets/cs50.png";

import tw from "twin.macro";
import { MouseEventHandler, useState } from "react";
const Conatct = () => {
  const [feature, setFeature] = useState("idea");
  return (
    <div
      id="contact"
      tw="p-[20px] flex flex-col justify-center items-center  gap-[20px] w-full text-white"
    >
      <h1 tw="text-[28px] [font-weight: 600]">So let's be real?</h1>

      <p>
        Whether you are searching for a front-end intern or a back-end intern, I
        believe what you need is someone who can adapt and learn quickly with
        any technology. At the end of the day, these are just tools that can be
        changed as needed. I don't know everything; that's a fact. However, the
        fundamentals I learned at 1337 enable me to adapt swiftly and learn
        anything. In fact, I am continually learning, utilizing all available
        resources. I particularly enjoy books that delve deep into the subject.
        Here are some books I've completed and found enjoyable:
      </p>
      <div tw="flex items-center justify-center p-[10px] gap-[15px] flex-wrap">
        <div tw=" w-[150px] h-fit rounded-[5px] bg-[#152B3D] p-[5px] [border: 1px solid #0D558D] flex justify-center items-center">
          <div tw="w-[100%] rounded-[5px] ">
            <img src={BookImg} tw="h-full" alt="" />
          </div>
        </div>
      </div>
      <p>
        I am actively pursuing various courses available to me, earning several
        certifications
      </p>
      <div tw="flex items-center justify-center p-[10px] gap-[15px] flex-wrap w-full">
        <div tw=" w-[90%] h-auto rounded-[5px] bg-[#152B3D] [border: 1px solid #0D558D] flex justify-center items-start gap-[15px] p-[10px] flex-col">
          <div tw="w-[100%] h-[80%] rounded-[5px] flex justify-center items-center">
            <img src={CertImg} tw="h-full" alt="" />
          </div>
          <ViewMoreBtn
            text="view credintional"
            size="sm"
            link="https://courses.edx.org/certificates/88141f59f37f4d1cb0b6d3c5f0cd7594?_gl=1*xa2guk*_ga*MTI2NTc0MjI4MC4xNzAxNjIwMDkz*_ga_D3KS4KMDT0*MTcwMTYyMDA5My4xLjEuMTcwMTYyMDExNi4zNy4wLjA."
          />
        </div>
      </div>
      <h3 tw="text-[24px] [font-weight: 600]">But what about projects?</h3>
      <p>
        Learning is about doing, and I firmly believe in applying my knowledge
        to real-world applications. I am constantly working on new projects,
        tackling challenges, and solving real-world problems. Currently, I am
        engaged in the following project
      </p>
      <div tw="w-full h-fit  rounded-[5px] sm:[padding: 40px 0]">
        <h1 tw="m-auto w-full text-center mb-[32px] capitalize text-[25px] text-white font-inter [font-weight: 600]">
          ChallengeGo
        </h1>
        <div tw="flex w-full flex-col h-auto gap-[10px] ">
          <Feature
            onClick={() => setFeature("idea")}
            on={feature === "idea"}
            title="Idea"
            description="A social platform to share your progress in any challenge with people who are interested in the same challenge. You can create and share your custom challenges, having fun along the way."
            icon={IdeaIcon}
            link="https://github.com/Abdellahmaarifa"
            actionText="any suggestion? let me here you"
          />
          <Feature
            onClick={() => setFeature("motivation")}
            on={feature === "motivation"}
            title="Motivation"
            description="I've experimented with various habit-tracking apps, attempting to cultivate habits in different fields. What I found lacking was the ability to share these commitments with the world and compete with individuals who share similar interests. This realization prompted us, me and my friends to embark on the development of our own app"
            icon={MotivationIcon}
            link="https://github.com/Abdellahmaarifa"
            actionText="any suggestion? let me here you"
          />
          <Feature
            onClick={() => setFeature("state")}
            on={feature === "state"}
            title="Development state"
            description="We are currently in the design phase, constructing the UI and UX. You can track the project's development on GitHub as we progress. or even contribute to it"
            icon={StateICon}
            link="https://github.com/Abdellahmaarifa"
            actionText="watch the project"
          />
        </div>
      </div>
      <p></p>
      <p tw="mb-[20px]">
        As you can see, Throughout my studies at 1337 School, I've gained
        valuable insights across diverse domains, acquiring foundational
        knowledge that equips me to tackle a variety of projects. If you
        discover a fit for your needs, I'd be delighted to connect and
        contribute to your team.
      </p>
      <ViewMoreBtn text="Get in touch" link="mailto:42maarifa@gmail.com" />
    </div>
  );
};

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
    <div tw="flex w-full h-auto [transition: all 1s]" onClick={onClick}>
      <div
        tw="w-[3px] h-auto rounded-[5px] bg-blue-400
       cursor-pointer "
        style={{
          background: on ? "rgb(96 165 250" : "#33424E",
          transition: "all 1s",
        }}
      ></div>
      <div
        tw="flex flex-col gap-[10px] h-fit justify-start items-start "
        style={{
          padding: on ? "8px 0" : 0,
        }}
      >
        <img
          src={icon}
          alt=""
          tw="w-[40px] ml-[18px]"
          style={{
            height: on ? "auto" : 0,
          }}
        />

        <h4
          tw="font-inter text-[18px] [padding: 0 24px] 
        cursor-pointer capitalize [font-weight: 600]"
          style={{
            color: on ? "white" : "#E5E7EB",
          }}
        >
          {title}
        </h4>
        <div
          tw="overflow-hidden  [padding: 0 24px] 
          flex flex-col justify-start items-start gap-[10px]"
          style={{
            height: on ? "fit-content" : 0,
            transition: "all .4s",
          }}
        >
          <p tw="">{description}</p>
          <ViewMoreBtn text={actionText} link={link} />
        </div>
      </div>
    </div>
  );
};
export default Conatct;
