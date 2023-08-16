import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Reveal({
  children,
  width = "full",
  transition = { delay: 0.4, duration: 2 },
  variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
}) {
  console.log(transition);
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    console.log(isInView);
  }, [isInView]);
  return (
    <div ref={divRef} className={`  ${width}  `}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={transition}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
