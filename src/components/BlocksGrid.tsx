"use client";
import { blocks } from "@/config/blocks";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const BlocksGrid = () => {
  const pathname = usePathname();
  const activeBlock = pathname.split("/")[1];
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left");

  // Get active and non-active blocks
  const activeBlocks = blocks.filter((block) => block.group === activeBlock);
  const nonActiveBlocks = blocks.filter((block) => block.group !== activeBlock);

  // Desktop layout logic
  const sortedActiveBlocks = activeBlocks.sort((a, b) => a.order - b.order);
  const activeLeftBlocks = sortedActiveBlocks.slice(
    0,
    Math.ceil(sortedActiveBlocks.length / 2)
  );
  const activeRightBlocks = sortedActiveBlocks.slice(
    Math.ceil(sortedActiveBlocks.length / 2)
  );

  const remainingLeftBlocks = nonActiveBlocks.filter(
    (block) => block.order % 2 !== 0
  );
  const remainingRightBlocks = nonActiveBlocks.filter(
    (block) => block.order % 2 === 0
  );

  const leftBlocks = [...activeLeftBlocks, ...remainingLeftBlocks].sort(
    (a, b) => {
      if (a.group === activeBlock) return -1;
      if (b.group === activeBlock) return 1;
      return a.order - b.order;
    }
  );

  const rightBlocks = [...activeRightBlocks, ...remainingRightBlocks].sort(
    (a, b) => {
      if (a.group === activeBlock) return -1;
      if (b.group === activeBlock) return 1;
      return a.order - b.order;
    }
  );

  // Mobile layout logic
  const mobileBlocks = activeBlock
    ? [...activeBlocks, ...nonActiveBlocks]
    : blocks.sort((a, b) => a.order - b.order);

  useEffect(() => {
    if (activeBlock) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [activeBlock]);

  const blockAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      mass: 1,
    },
  };
  console.log(
    activeBlock,
    activeBlocks,
    mobileBlocks.map((block) => block.group)
  );
  return (
    <>
      {activeBlock && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-0 w-full h-full z-[510] backdrop-blur-sm"
        />
      )}

      {/* Mobile Layout */}
      <div className="block md:hidden col-span-2">
        <motion.div layout className="grid grid-cols-1 gap-6">
          <AnimatePresence mode="sync">
            {mobileBlocks.map((block) => (
              <motion.div
                key={`mobile-${block.order}`}
                layout="position"
                {...blockAnimation}
                className={`w-full ${
                  activeBlock === block.group ? "z-[510]" : ""
                }`}
              >
                {block.block({ active: activeBlock === block.group })}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <motion.div
        layout
        className="hidden md:grid gap-6 w-full h-fit min-h-fit"
      >
        <AnimatePresence mode="sync">
          {leftBlocks.map((block) => (
            <motion.div
              key={`desktop-left-${block.order}`}
              layout="position"
              layoutId={`block-${block.order}`}
              {...blockAnimation}
              className="grid gap-4 w-full h-fit min-h-fit"
            >
              {block.block({ active: activeBlock === block.group })}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        layout
        className="hidden md:grid gap-6 w-full h-fit min-h-fit"
      >
        <AnimatePresence mode="sync">
          {rightBlocks.map((block) => (
            <motion.div
              key={`desktop-right-${block.order}`}
              layout="position"
              layoutId={`block-${block.order}`}
              {...blockAnimation}
              className="grid gap-4 w-full h-fit min-h-fit"
            >
              {block.block({ active: activeBlock === block.group })}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
