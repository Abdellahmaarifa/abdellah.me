import { BlockProps } from "@/config/blocks";
import { Icons } from "@/config/site";
import Image from "next/image";
import { Block } from "../Block";

const Overping = ({ active }: BlockProps) => {
  return (
    <Block
      title="OverPing (aka ft_transcendence)"
      description="online pong game"
      icon={<Icons.overping className="size-4" />}
      className="bg-gradient-to-r from-[#000000] to-[#0C1A24] p-4"
      active={active}
      link="https://github.com/Abdellahmaarifa/overPing"
    >
      <Image
        src="/overping.png"
        alt="overping"
        width={500}
        height={500}
        className="rounded-lg w-full p-0  border-white/[0.15] border-[0.5px] border-solid"
      />
    </Block>
  );
};

export default Overping;
