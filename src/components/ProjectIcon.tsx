import { CSSProperties, MouseEventHandler } from "react";
import tw from "twin.macro";

const ProjectIconContainer = tw.div`
   cursor-pointer xsm:w-[40px] xsm:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] bg-[#152B3D] absolute z-[2] 
    border-[#0D5287] border-[1px] border-solid
     rounded-[8px] justify-center items-center flex
`;

interface Position {
  left?: string | undefined;
  right?: string | undefined;
  top?: string | undefined;
  bottom?: string | undefined;
}
const ProjectIcon = ({
  img,
  position,
  onClick,
  active,
}: {
  img: string;
  position?: Position;
  onClick: MouseEventHandler;
  active?: boolean;
}) => {
  const style: CSSProperties = {
    left: position?.left === "center" ? "50%" : position?.left || undefined,
    right: position?.right || undefined,
    top: position?.top === "center" ? "50%" : position?.top || undefined,
    bottom: position?.bottom || undefined,
    transform:
      position?.left === "center"
        ? "translateX(-50%)"
        : position?.top === "center"
        ? "translateY(-50%)"
        : undefined,
  };
  return (
    <ProjectIconContainer
      style={{
        ...style,
        boxShadow: active ? "2px 2px 33px 3px rgba(13,57,88,0.8)" : undefined,
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick(e);
      }}
    >
      <img src={img} tw="w-[60%]" />
    </ProjectIconContainer>
  );
};

export default ProjectIcon;
