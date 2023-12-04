import tw from "twin.macro";
import QuoteIcon from "../assets/quote.svg?react";
const About = () => {
  return (
    <div id="about" tw="w-full p-[20px] md:p-0">
      <Paragraph>
        <span tw="flex flex-col justify-start items-start  p-[10px] text-[12px] xsm:text-[16px] w-[80%]">
          <span tw="relative ">
            <span tw="absolute -top-[20px] -left-[20px]">
              <QuoteIcon tw="w-[30px] fill-[#BDC3C7]" />
            </span>
            <span tw="[padding: 0 5px]">
              Knowledge without action is wastefulness and action without
              knowledge is foolishness.
            </span>
            <span>
              <QuoteIcon tw="w-[30px] absolute rotate-[180deg] -right-[20px] -bottom-[20px]  fill-[#BDC3C7]" />
            </span>
          </span>
          <span tw="text-[12px] self-end mr-[10px] font-bold">Al Ghazali</span>
        </span>
        <span>
          This is the philosophy upon which I've built my life. It's the same
          philosophy that prevents me from feeling intimidated by understanding.
          I embrace the idea of continuous learning and self-improvement. I
          enjoy grappling with challenges, figuring things out, and relishing
          the 'lightbulb moments.' When I discovered the field of programming, I
          found what I had been searching for – endless possibilities to enhance
          the lives of many people worldwide. The journey of learning, coupled
          with the gratification of making a positive impact, and getting paid
          for that, sounds like a good idea for me!
        </span>
        <span>
          As a software developer, and in a field that changes quickly and
          evolves rapidly over time. The necessity to learn quickly and adapt to
          changes is crucial. This principle is the essence of the common core
          at 1337 (42 Network) school, designed to provide students with the
          foundation to keep learning and adapting to any new technology
          rapidly. During the last two years, I've learned the fundamentals of
          programming and have built many projects along the way. Here is an
          overview of the projects I have tackled as a student.
        </span>
      </Paragraph>
    </div>
  );
};

// Styling
const Paragraph = tw.p`
    text-[#a9bbcb] 
    text-[14px] 
    xsm:text-[16px] 
    sm:text-[18px]  
    flex 
    flex-col 
    gap-[12px] 
`;
export default About;
