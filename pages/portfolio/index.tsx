import { motion, Variants } from "framer-motion";
import React from "react";
import { PortfolioContainer } from "../../src/portfolio/styles";

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

export default function PortPage() {
  const commissionData = [
    {
      id: 1,
      price: 300,
      title: "Full Body",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image:
        "https://pbs.twimg.com/media/E36Ts7PVcAkd1-G?format=jpg&name=large",
    },
    {
      id: 2,
      price: 150,
      title: "Half Body",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image:
        "https://pbs.twimg.com/media/E3sVndsUcAEJ8XM?format=jpg&name=large",
    },
    {
      id: 3,
      price: 300,
      title: "Other",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image:
        "https://pbs.twimg.com/media/E3wDKcgVoAQjtFL?format=jpg&name=small",
    },
    {
      id: 4,
      price: 100,
      title: "Full Body",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image:
        "https://pbs.twimg.com/media/E3vs-Y9VUAIeJd3?format=jpg&name=medium",
    },
    {
      id: 5,
      price: 150,
      title: "Half Body",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image:
        "https://pbs.twimg.com/media/E3rKlOfVcAIb2N5?format=jpg&name=large",
    },
    {
      id: 5,
      price: 150,
      title: "Half Body",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image:
        "https://pbs.twimg.com/media/E1-3WmeVgAMrguO?format=jpg&name=4096x4096",
    },
    {
      id: 5,
      price: 150,
      title: "Half Body",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image:
        "https://pbs.twimg.com/media/E2y0rCRVoAEA6by?format=jpg&name=large",
    },
  ];

  return (
    <PortfolioContainer
      initial="hidden"
      animate="visible"
      variants={containerVar}
    >
      {commissionData.map((commissionItemData, index) => (
        <motion.div animate="visible" whileHover="hover" className="img-cont">
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
              backgroundSize: "125%",
            }}
            style={{
              gridArea: `span 1 / span 1`,
              position: "relative",
              backgroundImage: `url(${commissionItemData.image})`,
            }}
          />
          <motion.div variants={bottom} className="info">
            {commissionItemData.title}
          </motion.div>
        </motion.div>
      ))}
    </PortfolioContainer>
  );
}
