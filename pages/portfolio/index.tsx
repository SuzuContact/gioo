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
  hidden: { y: "100%", backgroundSize: "cover" },
  visible: {
    y: 0,
    backgroundSize: "cover",
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
                backgroundSize: "cover",
              }}
              animate={{
                backgroundSize: "cover",
              }}
              transition={{
                ease: "circInOut",
                duration: 0.8,
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
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/2021-07-06%2019-25-23_Trim.mp4?alt=media&token=eeadd219-84be-40db-8375-dfadb267e9f7",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/AmoreSucubbusMiniature.png?alt=media&token=a62aa23a-90dc-4db3-b3c0-4e376b40ea39",
      type: "video",
    },
    {
      id: 2,
      title: "AmoreSucubbus",
      image:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/Scene1.gif?alt=media&token=cf9d5e6c-64d9-433c-b5d2-f726b0647165",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/AmoreSucubbusMiniature2.png?alt=media&token=2ff8f926-83da-484c-9729-d29a1ac7cece",
      type: "img",
    },
    {
      id: 3,
      title: "Apocrypha",
      image:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/2021-06-23%2021-28-05_Trim.mp4?alt=media&token=5f0be9c3-3efd-40b6-88bf-beb4fbdb3bbf",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/ApocryphaMiniature.png?alt=media&token=6d41f1f0-59a5-4583-b56e-64d4d316d8e0",
      type: "video",
    },
    {
      id: 6,
      title: "Abbadon, Art: Taka",
      image:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/2021-05-12%2016-08-30.mp4?alt=media&token=3391d3a4-fd31-4f6b-a317-a132d62797af",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/AbbadonMiniature.png?alt=media&token=d51d3426-88d8-43ca-b55f-50e1b08b9a63",
      type: "video",
    },
    {
      id: 4,
      title: "Eye animation",
      image:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/2021-06-02%2015-28-24_Trim.mp4?alt=media&token=17855fe4-7a91-4ca5-b345-34cc249147da",
      minuature:
        "https://firebasestorage.googleapis.com/v0/b/giocomissions.appspot.com/o/EYE.png?alt=media&token=7f474351-b4c1-4558-add5-1adac495aab1",
      type: "video",
    },
  ];

  return {
    props: {
      commissionData,
    }, // will be passed to the page component as props
  };
}
