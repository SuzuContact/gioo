import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { IconRight, IconLeft, IconClose } from "./styles";

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const swipeConfidenceThreshold = 10000;
export default function ImageChanger({
  types,
  images,
  def,
  onClose,
}: {
  types: string[];
  images: string[];
  def?: number;
  onClose: () => void;
}) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  useEffect(() => {
    if (def != null && def != undefined) {
      // const index = images.map((item: any) => item._id)?.indexOf(def);
      setPage([def, def > page ? 1000 : -1000]);
    }
  }, [def]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconRight onClick={() => paginate(1)}>
          <FaChevronRight />
        </IconRight>
        <IconClose onClick={onClose}>
          <RiCloseFill />
        </IconClose>
        <AnimatePresence custom={direction}>
          {types[imageIndex] === "img" ? (
            <motion.img
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "100%",
                maxWidth: "100%",
                position: "absolute",
                zIndex: 10,
                borderRadius: 30,
                border: "3px solid #85ADEB",
                boxSizing: "border-box",
              }}
              key={page}
              src={images?.[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="imgInt"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              // dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          ) : (
            <motion.video
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "100%",
                maxWidth: "100%",
                position: "absolute",
                zIndex: 10,
                borderRadius: 30,
                border: "3px solid #85ADEB",
                boxSizing: "border-box",
              }}
              key={page}
              src={images?.[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              // dragElastic={1}
              onDrag={(e, { offset }) => {
                // setShow(offset.x > 0 ? "rgth" : "left");
                console.log("data", offset.x);
              }}
              onDragEnd={(e, { offset, velocity }) => {
                // setShow(null);
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="imgInt"
              autoPlay
              loop
              // muted
              controls
            >
              <source type="video/mp4" src={images?.[imageIndex]} />
            </motion.video>
          )}
        </AnimatePresence>
        <IconLeft onClick={() => paginate(-1)}>
          <FaChevronLeft />
        </IconLeft>
      </div>
    </>
  );
}
