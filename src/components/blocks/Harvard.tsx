import { BlockProps } from "@/config/blocks";
import { Block } from "../Block";
import Image from "next/image";
import { Icons } from "@/config/site";

const Harvard = ({ active }: BlockProps) => {
  return (
    <Block
      link="https://courses.edx.org/certificates/88141f59f37f4d1cb0b6d3c5f0cd7594?_gl=1*xa2guk*_ga*MTI2NTc0MjI4MC4xNzAxNjIwMDkz*_ga_D3KS4KMDT0*MTcwMTYyMDA5My4xLjEuMTcwMTYyMDExNi4zNy4wLjA."
      title="CS50"
      description="Introduction to Computer Science"
      icon={<Icons.harvard className="size-6" />}
      active={active}
      className="p-4"
    >
      <Image
        src="/harvard-cert.png"
        alt="Harvard"
        width={300}
        height={100}
        className="rounded-sm m-auto p-2"
      />
    </Block>
  );
};

export default Harvard;
