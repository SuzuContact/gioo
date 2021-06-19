import { ButtonBase } from "@material-ui/core";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";

interface ShowCommissionProps {
  title: string;
  url: string[];
  tabTitles: string[];
  tabContents: JSX.Element[];
}

const imageVariants: Variants = {
  initial: { scale: 0.7, rotate: "15deg", transition: { delay: 0.3 } },
  exit: { scale: 0.7, rotate: "15deg" },
  animate: {
    filter: "drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.1))",
    scale: 1,
    rotate: "0deg",
  },
  whileHover: {
    filter: "drop-shadow(4px 4px 18px rgba(0, 0, 0, 0.2))",
  },
};

export default function ShowCommission({
  title,
  url,
  tabTitles,
  tabContents,
}: ShowCommissionProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <h3>{title}</h3>
      <div className="show-content">
        <div className="tabs">
          <div className="tab-header">
            <div className="tabTitles">
              {tabTitles.map((tabTitle, index) => (
                <ButtonBase
                  key={index}
                  className={`tabTitle ${active === index ? "active" : ""}`}
                  onClick={() => setActive(index)}
                >
                  {tabTitle}
                </ButtonBase>
              ))}
            </div>
            <motion.div animate={{ x: active * 150 }} className="indicator" />
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              transition={{
                ease: "backOut",
              }}
              exit={{ x: 40 }}
              initial={{ x: -40 }}
              animate={{ x: 0 }}
              className="tabContents"
              key={active}
            >
              {tabContents[active]}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.img
            variants={imageVariants}
            initial="initial"
            exit="exit"
            animate="animate"
            whileHover={"whileHover"}
            key={active}
            src={url[active]}
            alt={title}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
