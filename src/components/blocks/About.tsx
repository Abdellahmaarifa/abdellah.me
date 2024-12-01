import { BlockProps } from "@/config/blocks";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import ProfileImage from "../../../public/profile.png";
import { Block } from "../Block";
const About = ({ active }: BlockProps) => {
  return (
    <Block
      // title="Hello World"
      // description="Hello World"
      // icon={<Icons.about className="size-6" />}
      // className="bg-gradient-to-b from-blue-500 to-purple-500 min-h-[400px]"
      active={active}
    >
      <div className="flex flex-row gap-2 py-2 h-fit w-full justify-center items-center">
        <div className="min-w-[100px] relative">
          <Image src={Logo} alt="Logo" width={100} height={100} />
          <Image
            src={ProfileImage}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full absolute bottom-[10px] left-[19px] w-[64px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[2px]">
            <span className="text-xl font-bold">Hello,</span>
            <span className="text-md font-bold">I am Abdellah</span>
            <span className="text-sm">I build things for the web</span>
          </div>
          <p className="text-sm text-white/50 leading-6">
            Currently, I am a Fullstack Software Engineer at{" "}
            <a href="https://www.jobzyn.com" className="text-white">
              Jobzyn
            </a>
          </p>
          <Link href="/resume" className="text-sm text-white/50">
            View full resume
          </Link>
        </div>
      </div>
    </Block>
  );
};

export default About;
