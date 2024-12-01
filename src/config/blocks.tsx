import _1337 from "@/components/blocks/1337";
import About from "@/components/blocks/About";
import Contact from "@/components/blocks/Contact";
import Harvard from "@/components/blocks/Harvard";
import Jobzyn from "@/components/blocks/Jobzyn";
import Overping from "@/components/blocks/OverPing";
import Quote from "@/components/blocks/Quote";
import Stack from "@/components/blocks/Stack";

export type MenuItem = "about" | "contact" | "experience" | "blog";

export type BlockProps = {
  active: boolean;
};

export type Blocks = {
  block: (props: BlockProps) => React.ReactNode;
  order: number;
  group: MenuItem;
}[];

export const blocks: Blocks = [
  {
    block: (props) => <About {...props} />,
    order: 1,
    group: "about",
  },
  {
    block: (props) => <_1337 {...props} />,
    order: 3,
    group: "about",
  },

  {
    block: (props) => <Contact {...props} />,
    order: 5,
    group: "contact",
  },

  {
    block: (props) => <Overping {...props} />,
    order: 6,
    group: "experience",
  },
  {
    block: (props) => <Jobzyn {...props} />,
    order: 2,
    group: "experience",
  },
  {
    block: (props) => <Stack {...props} />,
    order: 4,
    group: "about",
  },
  {
    block: (props) => <Harvard {...props} />,
    order: 7,
    group: "about",
  },
  {
    block: (props) => <Quote {...props} />,
    order: 8,
    group: "about",
  },
];
