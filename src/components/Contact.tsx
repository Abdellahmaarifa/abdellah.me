import ViewMoreBtn from "./ViewMoreBtn";

import IdeaIcon from "../assets/idea.png";
import MotivationIcon from "../assets/motivation.png";
import StateICon from "../assets/state.png";
import BookImg from "../assets/book.jpg";
import CertImg from "../assets/cert.jpg";

import tw from "twin.macro";
import { MouseEventHandler, useState } from "react";
const Conatct = () => {
  const [feature, setFeature] = useState("idea");
  return (
    <div
      id="contact"
      tw="p-[20px] flex flex-col justify-center items-center  w-full text-white"
    >
      <h1>So let's be real?</h1>

      <p>
        wither you are looking for front end intern or backend intern, i can
        tell that what you are looking for is someone how can adobt and learn
        quickly to any technolgy , at the end of the day these are just tools
        that you can change at in time when you have to, i don't know
        everything, that a fact, but the fondamontal that i learn in 1337, makes
        me able to adobt fast and learn anything, as a mather of a fact i am
        still learning using all the resources that availble for me.
      </p>
      <p>
        i like books that goes dip in to the subject, this are some of the books
        i finshed reading and i have fun:
      </p>
      <div tw="flex items-center justify-center p-[10px] gap-[15px] flex-wrap">
        <div tw=" w-[150px] h-fit rounded-[5px] bg-[#152B3D] p-[5px] [border: 1px solid #0D558D] flex justify-center items-center">
          <div tw="w-[100%] rounded-[5px] ">
            <img src={BookImg} tw="h-full" alt="" />
          </div>
        </div>
      </div>
      <p>
        i am also taking a lot of courses that are available to me: this some
        certs :{" "}
      </p>
      <div tw="flex items-center justify-center p-[10px] gap-[15px] flex-wrap">
        <div tw=" w-[150px] h-[150px] rounded-[5px] bg-[#152B3D] [border: 1px solid #0D558D] flex justify-center items-start gap-[15px] p-[10px] flex-col">
          <div tw="w-[100%] h-[80%] rounded-[5px] flex justify-center items-center">
            <img src={CertImg} tw="h-full" alt="" />
          </div>
          <ViewMoreBtn text="view credintional" size="sm" />
        </div>
      </div>
      <h3>But Wait? How about Projects?</h3>
      <p>
        yes learning is about doing, and that's true i am alwase working on a
        new project and applying what i learn to a real application and trying
        to solve real world problems: and this is the project i am currently
        working on :
      </p>
      <div tw="w-full h-fit  rounded-[5px] sm:[padding: 40px 0]">
        <h1 tw="m-auto w-full text-center mb-[32px] capitalize text-[25px] text-white font-inter [font-weight: 600]">
          challengZoo
        </h1>
        <div tw="flex w-full flex-col h-auto gap-[10px] ">
          <Feature
            onClick={() => setFeature("idea")}
            on={feature === "idea"}
            title="Idea"
            description="a social platfor to share your progress in any challenge with people who are intresetd in the same challnge, you can create and share with people your own custom challenge and have fun along the way"
            icon={IdeaIcon}
            link=""
            actionText="any suggestion? let me here you"
          />
          <Feature
            onClick={() => setFeature("motivation")}
            on={feature === "motivation"}
            title="Motivation"
            description="a social platfor to share your progress in any challenge with people who are intresetd in the same challnge, you can create and share with people your own custom challenge and have fun along the way"
            icon={MotivationIcon}
            link=""
            actionText="any suggestion? let me here you"
          />
          <Feature
            onClick={() => setFeature("state")}
            on={feature === "state"}
            title="Development state"
            description="a social platfor to share your progress in any challenge with people who are intresetd in the same challnge, you can create and share with people your own custom challenge and have fun along the way"
            icon={StateICon}
            link=""
            actionText="any suggestion? let me here you"
          />
        </div>
      </div>
      <p></p>
      <p tw="mb-[20px]">
        As you see, during my studie at the 1337 school i learnd a lot of
        concepts in many differet areas and i learned the foundational that let
        me work any kind of projects, if you find what you are looking for,
        let's get in touch, i'll be more then happy to join your team.
      </p>
      <ViewMoreBtn text="Get in touch" />
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
