import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ShowCase = () => {
  return (
    <>
      <section className="showcase bg-top">
        <div className="container">
          <motion.div
            className="heading-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* <TitleSm title="SHOWCASE" />
            <br />
            <br /> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Title title="Fresh ideas. Bold design. Smart realisation." className="title-bg" />
            </motion.div>
          </motion.div>

          <br />
          <br />
          <div className="grid-3">
            {showcase.map((item) => (
              <CardWithAnimation key={item.id} item={item} />
            ))}
          </div>
          <div className="py btn">
            <motion.button
              className="secondary-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              View More
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

const CardWithAnimation = ({ item }) => {
  // Intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when in view
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0, // Trigger animation based on inView status
        y: inView ? 0 : 20, // Move the card up when in view
      }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Card data={item} caption={item.post} />
    </motion.div>
  );
};

export default ShowCase;
