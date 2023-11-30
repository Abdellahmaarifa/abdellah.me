import tw from "twin.macro";

const About = () => {
  return (
    <div id="about" tw="w-full ">
      <Paragraph>
        <span>
          As a software developer, I started the infinite loop of learning,
          coding, and debugging two years ago, and during this period I've
          completed many projects that meet together to build the foundational
          of programming, that is what the common core in 1337 is all about, by
          the time i adopt my own mental model for programming, and i am looking
          to apply my knowledge into scalable solutions in the ever-evolving
          landscape of software development.
        </span>
        <span>
          As a software developer, I started the infinite loop of learning,
          coding, and debugging two years ago, and during this period I've
          completed many projects that meet together to build the foundational
          of programming.
        </span>
        <span>
          As a software developer, I started the infinite loop of learning,
          coding, and debugging two years ago.
        </span>
      </Paragraph>
    </div>
  );
};

// Styling
const Paragraph = tw.p`
    text-[#a9bbcb] text-[17px] flex flex-col gap-[12px]
`;
export default About;
