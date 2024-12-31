import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import { motion } from "framer-motion";

const Expertise = () => {
  // Animation variants for the heading (Fade In + Rotate)
  const headingVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for the cards (Zoom In + Opacity + Flip In Effect)
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 }, // Cards hidden with zoom out and rotation
    visible: (i) => ({
      opacity: 1,
      scale: 1, // Full size
      rotateY: 0, // Flip in place
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8, // Zoom out effect on exit
      rotateY: -90, // Flip out effect on exit
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="expertise">
      <div className="container">
        <motion.div
          className="heading-title"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          layout
        >
          <Title title="Our expertise" />
          <p>
            Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac
            volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula
            at, molestie dolor.
          </p>
        </motion.div>
        <motion.div className="hero-content grid-4" layout>
          {expertise.slice(0, 4).map(
            (
              item,
              i // Limit to the first 4 items
            ) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.2 }}
                layout
                whileHover={{
                  scale: 1.05, // Scale up on hover
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Add shadow
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <Card data={item} caption="learn more" />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
