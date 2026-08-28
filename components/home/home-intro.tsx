"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

// 텍스트 애니메이션이 끝나는 즉시 커튼 슬라이드를 시작합니다.
const INTRO_DURATION = 2250;
let hasPresentedHomeIntro = false;

function isInitialHomeDocument() {
  if (typeof window === "undefined") {
    return true;
  }

  const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;

  if (!navigation) {
    return window.location.pathname === "/";
  }

  return new URL(navigation.name).pathname === "/";
}

export function HomeIntro() {
  const [isVisible, setIsVisible] = useState(() => !hasPresentedHomeIntro && isInitialHomeDocument());
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    hasPresentedHomeIntro = true;

    if (reduceMotion || !isVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => setIsVisible(false), INTRO_DURATION);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible, reduceMotion]);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && !reduceMotion && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-white"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="flex flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: [0, 1, 1, 0], y: [24, 0, 0, -20] }}
            transition={{
              duration: 2.25,
              times: [0, 0.25, 0.85, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-5 text-[10px] font-semibold tracking-[0.42em] text-[#0646a5] sm:text-xs">
              HDMS PLATFORM
            </p>
            <p className="text-[clamp(1.7rem,4.25vw,4.65rem)] font-semibold leading-none tracking-[-0.045em] text-[#0646a5]">
              POWERING THE AI ERA
            </p>
            <motion.span
              className="mt-7 block h-px bg-[#0646a5]"
              initial={{ width: 0 }}
              animate={{ width: [0, 72, 72, 0] }}
              transition={{ duration: 2.1, times: [0, 0.3, 0.76, 1], ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
