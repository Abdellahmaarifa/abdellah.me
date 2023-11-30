import tw from "twin.macro";

const Circle = ({
  width,
  height,
  bg,
  children,
}: {
  width: number;
  height: number;
  bg: string;
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <CircleContainer
      style={{
        width: `${width}%`,
        height: `${height}%`,
        background: `center/cover url(${bg})`,
      }}
    >
      {children}
    </CircleContainer>
  );
};

const CircleContainer = tw.div`
    rounded-[50%] flex justify-center items-center relative
`;

export default Circle;
