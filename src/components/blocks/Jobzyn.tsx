import { BlockProps } from "@/config/blocks";
import { Icons } from "@/config/site";
import { Block } from "../Block";

const Jobzyn = ({ active }: BlockProps) => {
  return (
    <Block
      title="Jobzyn"
      description="a startup that helps job seekers find their dream jobs"
      icon={<Icons.jobzyn className="w-4" />}
      link="https://jobzyn.com"
      active={active}
      canvasCursor="canvas-cursor"
    >
      <div className="flex flex-col items-center justify-center w-full h-[100px] mt-12">
        <span
          id="logo"
          className="border-2 border-white w-[100px] h-[100px] rounded-full  justify-center items-center p-2 px-3 text-decoration-none bg-gradient-to-r from-orange-500 to-yellow-400 text-white leading-none flex font-extrabold text-[20px]"
        >
          JOBZYN
        </span>
      </div>
    </Block>
  );
};

export default Jobzyn;
