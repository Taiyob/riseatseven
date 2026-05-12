import * as React from "react";
import { cva } from "class-variance-authority";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { cn } from "../../lib/utils.js";

const cardVariants = cva("absolute will-change-transform", {
  variants: {
    variant: {
      dark: "flex size-full flex-col items-center justify-center gap-6 rounded-[2.5rem] bg-[#0b0b0b] text-white p-8 md:p-12 shadow-xl",
      mint: "flex size-full flex-col items-center justify-center gap-6 rounded-[2.5rem] bg-[#B4F2DC] text-black p-8 md:p-12 shadow-xl",
      light: "flex size-full flex-col items-center justify-center gap-6 rounded-[2.5rem] bg-white text-black p-8 md:p-12 shadow-xl",
    },
  },
  defaultVariants: {
    variant: "light",
  },
});

const ContainerScrollContext = React.createContext(undefined);

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext);
  if (context === undefined) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScrollContextProvider"
    );
  }
  return context;
}

export const ContainerScroll = ({ children, style, className, ...props }) => {
  const scrollRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Apply a gentle spring physics for a premium, buttery-smooth scrolling feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.1,
    restDelta: 0.001
  });

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress: smoothProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-svh w-full", className)}
        style={{ perspective: "1000px", ...style }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};

export const CardsContainer = ({ children, className, ...props }) => {
  const containerRef = React.useRef(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTransformed = React.forwardRef(
  (
    {
      arrayLength,
      index,
      incrementY = 10,
      incrementZ = 10,
      incrementRotation = -index + 90,
      className,
      variant,
      style,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext();

    const start = (index - 1) / arrayLength;
    const end = index / arrayLength;
    const range = React.useMemo(() => [start, end], [start, end]);
    const rotateRange = [range[0] - 1.5, range[1] / 1.5];

    const y = useTransform(scrollYProgress, range, ["0%", "-180%"]);
    const rotate = useTransform(scrollYProgress, rotateRange, [
      incrementRotation,
      0,
    ]);
    const transform = useMotionTemplate`translateZ(${index * incrementZ
      }px) translateY(${y}) rotate(${rotate}deg)`;

    const dx = useTransform(scrollYProgress, rotateRange, [4, 0]);
    const dy = useTransform(scrollYProgress, rotateRange, [4, 12]);
    const blur = useTransform(scrollYProgress, rotateRange, [2, 24]);
    const alpha = useTransform(scrollYProgress, rotateRange, [0.15, 0.2]);

    // Simplification for drop-shadow using CSS filter
    const cardStyle = {
      top: index * incrementY,
      transform,
      backfaceVisibility: "hidden",
      zIndex: (arrayLength - index) * incrementZ,
      ...style,
    };

    return (
      <motion.div
        layout="position"
        ref={ref}
        style={cardStyle}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
CardTransformed.displayName = "CardTransformed";
