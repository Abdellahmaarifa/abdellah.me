import { BlockProps } from "@/config/blocks";
import stack from "@/config/stack";
import { AnimatePresence, motion } from "framer-motion";
import { Code, FileQuestion } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Block } from "../Block";

const Stack = ({ active }: BlockProps) => {
  const [solvedPairs, setSolvedPairs] = useState<number[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [canFlip, setCanFlip] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const [showIntroAnimation, setShowIntroAnimation] = useState(true);

  // Create pairs of cards and shuffle them
  const cards = useMemo(() => {
    const pairs = stack.map((item, index) => ({
      ...item,
      pairId: index,
    }));
    return [...pairs, ...pairs]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, index }));
  }, []);

  // Hide intro animation on first interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroAnimation(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Get unique cards for completed state
  const uniqueCards = useMemo(() => {
    return stack.map((item, index) => ({
      ...item,
      pairId: index,
      index,
    }));
  }, []);

  const handleCardClick = (index: number) => {
    if (
      !canFlip ||
      selectedCards.includes(index) ||
      solvedPairs.includes(cards[index].pairId)
    ) {
      return;
    }

    if (selectedCards.length === 1) {
      const firstCardIndex = selectedCards[0];
      const secondCardIndex = index;

      setSelectedCards([...selectedCards, secondCardIndex]);
      setCanFlip(false);

      if (cards[firstCardIndex].pairId === cards[secondCardIndex].pairId) {
        // Match found
        setTimeout(() => {
          const newSolvedPairs = [...solvedPairs, cards[firstCardIndex].pairId];
          setSolvedPairs(newSolvedPairs);
          setSelectedCards([]);
          setCanFlip(true);

          // Check if game is completed
          if (newSolvedPairs.length === stack.length) {
            setShowCompletionAnimation(true);
            setTimeout(() => {
              setIsCompleted(true);
              setShowCompletionAnimation(false);
            }, 1000);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setSelectedCards([]);
          setCanFlip(true);
        }, 1000);
      }
    } else {
      setSelectedCards([index]);
    }
  };

  // Reset game when component becomes inactive
  useEffect(() => {
    if (!active) {
      setSolvedPairs([]);
      setSelectedCards([]);
      setCanFlip(true);
      setIsCompleted(false);
      setShowCompletionAnimation(false);
    }
  }, [active]);

  const displayCards = isCompleted ? uniqueCards : cards;
  const gridClass = isCompleted
    ? "grid grid-cols-3 gap-6 perspective-1000 [&>*:nth-last-child(-n+2)]:col-span-1 [&>*:nth-last-child(-n+2)]:mx-auto place-items-center"
    : "grid grid-cols-4 gap-4 perspective-1000 place-items-center";

  const cardSize = isCompleted ? "w-[80px] h-[100px]" : "w-[50px] h-[60px]";
  const iconSize = isCompleted ? "w-[40px] h-[40px]" : "w-[30px] h-[30px]";
  const textSize = "text-xs";

  return (
    <Block
      title="Stack"
      description="Technologies I like to work with"
      className="p-4 relative"
      active={active}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <AnimatePresence>
        {showCompletionAnimation && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white/20 rounded-lg z-10"
          />
        )}
      </AnimatePresence>

      <div className="flex justify-center w-full py-6">
        <motion.div
          className={gridClass}
          layout
          transition={{ duration: 0.5 }}
          style={{ maxWidth: isCompleted ? "320px" : "280px" }}
        >
          {displayCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              layout
              className={`${cardSize} relative cursor-pointer transition-all duration-500`}
              onClick={() => {
                setShowIntroAnimation(false);
                if (!isCompleted) handleCardClick(index);
              }}
            >
              <motion.div
                initial={false}
                animate={{
                  rotateY:
                    isCompleted ||
                    selectedCards.includes(index) ||
                    solvedPairs.includes(item.pairId)
                      ? 0
                      : 180,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Front of card */}
                <motion.div
                  className="absolute w-full h-full backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <motion.div
                    className="w-full h-full gap-2 p-2 rounded-sm border-[1px] border-white/[0.25] hover:border-white/[0.55] flex flex-col justify-center items-center bg-black"
                    layout
                    animate={
                      showIntroAnimation
                        ? {
                            borderColor: [
                              "rgba(255,255,255,0.25)",
                              "rgba(255,255,255,0.85)",
                              "rgba(255,255,255,0.25)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className={`${iconSize} relative flex justify-center items-center  overflow-hidden p-[1px]`}
                      layout
                    >
                      {item.icon()}
                    </motion.div>
                    {isCompleted && (
                      <motion.span className={`${textSize} text-center`} layout>
                        {item.name}
                      </motion.span>
                    )}
                  </motion.div>
                </motion.div>

                {/* Back of card */}
                {!isCompleted && (
                  <motion.div
                    className="absolute w-full h-full backface-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <motion.div
                      className="w-full h-full gap-2 p-2 rounded-sm border-[1px] border-white/[0.25] hover:border-white/[0.55] flex justify-center items-center bg-black"
                      animate={
                        showIntroAnimation
                          ? {
                              borderColor: [
                                "rgba(255,255,255,0.25)",
                                "rgba(255,255,255,0.85)",
                                "rgba(255,255,255,0.25)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FileQuestion className="w-8" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Block>
  );
};

export default Stack;
