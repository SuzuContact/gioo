import { motion, Variants } from "framer-motion";
import React from "react";

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

export default function PortPage() {
  const commissionData = [
    {
      title: "vTuber",
      items: [
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
      ],
    },
    {
      title: "Arte",
      items: [
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
      ],
    },
  ];

  return (
    <div>
      {commissionData.map(({ title, items }) => (
        <motion.div
          key={title}
          initial="hidden"
          animate="visible"
          variants={containerVar}
        >
          <motion.h2>{title}</motion.h2>

          {items.map((commissionItemData, index) => (
            <img
              style={{
                width: 250,
                height: 250,
                objectFit: "cover",
                borderRadius: 30,
              }}
              src={commissionItemData.image}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}
