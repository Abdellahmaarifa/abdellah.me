import { BlockProps } from "@/config/blocks";
import { motion, useInView } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { useRef } from "react";
import { Block } from "../Block";
const Quote = ({ active }: BlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Block active={active} className="p-4">
      <motion.div
        ref={ref}
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="text-lg text-center  font-bold tracking-tighter p-4 flex flex-col gap-4"
      >
        <p className="relative">
          <QuoteIcon className="size-4 rotate-180 absolute top-0 left-0" />
          Knowledge without action is wastefulness and action without knowledge
          is foolishness.
          <QuoteIcon className="size-4 absolute bottom-0 right-0" />
        </p>
        <span className="text-sm text-gray-500">Al Ghazali</span>
      </motion.div>
    </Block>
  );
};

export default Quote;
