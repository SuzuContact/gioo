import { motion, Variants } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { ModalContainer, PortfolioContainer } from "../../src/portfolio/styles";
import ImageChanger from "../../src/shared/ImageChanger";

const containerVar: Variants = {
  hidden: { x: -150 },
  visible: {
    x: 0,
    transition: {
      bounce: 0.4,
      type: "spring",
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

const itemVar: Variants = {
  hidden: { y: "100%", backgroundSize: "100%" },
  visible: {
    y: 0,
    backgroundSize: "100%",
    transition: {
      duration: 0.2,
    },
  },
};

const bottom: Variants = {
  hover: {
    y: 0,
  },
  visible: {
    y: 60,
  },
};

export default function PortPage({ commissionData }) {
  const [open, setOpen] = useState<number | null>();

  const openModal = (index: number) => setOpen(index);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setOpen(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <>
      {open != null && (
        <ModalContainer>
          <div className="content">
            <ImageChanger
              onClose={() => setOpen(null)}
              types={commissionData.map(
                (commissionDataItem) => commissionDataItem.type
              )}
              def={open}
              images={commissionData.map(
                (commissionDataItem) => commissionDataItem.image
              )}
            />
          </div>
        </ModalContainer>
      )}
      <PortfolioContainer
        initial="hidden"
        animate="visible"
        variants={containerVar}
      >
        {commissionData.map((commissionItemData, index) => (
          <motion.div
            onClick={() => openModal(index)}
            whileTap={{
              scale: 0.9,
            }}
            key={commissionItemData.id}
            animate="visible"
            whileHover="hover"
            className="img-cont"
          >
            <motion.div
              variants={itemVar}
              className="img"
              initial={{
                backgroundSize: "100%",
              }}
              animate={{
                backgroundSize: "100%",
              }}
              transition={{
                ease: "circInOut",
                duration: 0.8,
              }}
              whileHover={{
                backgroundSize: "200%",
              }}
              style={{
                gridArea: `span 1 / span 1`,
                position: "relative",
                backgroundImage: `url(${commissionItemData.minuature})`,
              }}
            />
            <motion.div variants={bottom} className="info">
              {commissionItemData.title}
            </motion.div>
          </motion.div>
        ))}
      </PortfolioContainer>
    </>
  );
}

export async function getStaticProps(context) {
  const commissionData = [
    {
      id: 1,
      title: "AmoreSucubbus",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-07-06_19-25-23_Trim.gif?alt=media&token=9df199c1-a445-410a-b001-550ddbe0ec9d",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-07-06_19-25-23_Trim.gif?alt=media&token=9df199c1-a445-410a-b001-550ddbe0ec9d",
      type: "img",
    },
    {
      id: 2,
      title: "AmoreSucubbus",
      image: "/gif/Scene1.gif",
      minuature: "/gif/Scene1.gif",
      type: "img",
    },
    {
      id: 3,
      title: "Apocrypha",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-06-23_21-28-05_Trim.gif?alt=media&token=8c523c4b-096a-49e4-9a4c-201726e0b060",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-06-23_21-28-05_Trim.gif?alt=media&token=8c523c4b-096a-49e4-9a4c-201726e0b060",
      type: "img",
    },
    {
      id: 4,
      title: "Eye animation",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-06-02_15-28-24_Trim.gif?alt=media&token=7a163e94-09fb-4e3d-bfe2-f1072669c09d",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-06-02_15-28-24_Trim.gif?alt=media&token=7a163e94-09fb-4e3d-bfe2-f1072669c09d",
      type: "img",
    },
    {
      id: 5,
      title: "Model",
      image: "/images/GioVanillaOutfit2.png",
      minuature: "/images/GioVanillaOutfit2.png",
      type: "img",
    },
    {
      id: 6,
      title: "Abbadon, Art: Taka",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-04-25_01-03-12_Trim_2.gif?alt=media&token=62b68508-cf7a-4b0a-879b-0954dbdf4f36",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-04-25_01-03-12_Trim_2.gif?alt=media&token=62b68508-cf7a-4b0a-879b-0954dbdf4f36",
      type: "img",
    },
  ];

  return {
    props: {
      commissionData,
    }, // will be passed to the page component as props
  };
}
