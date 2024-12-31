import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { expertise } from "@/assets/data/dummydata"; // Replace with your actual data import
import { Card } from "@/components/common/Card"; // Replace with your actual Card component import
import { Title } from "@/components/common/Title"; // Replace with your actual Title component import
import { useInView } from "react-intersection-observer";

const Services = () => {
  return (
    <section className="agency bg-top">
      <div className="container">
        <motion.div
          className="heading-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Title title="Unique technologies & modern approach" className="title-bg" />
          </motion.div>
        </motion.div>

        <div className="grid-3 py">
          {expertise.map((item) => (
            <CardWithAnimation key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// CardWithAnimation component to handle the inView animation for each card
const CardWithAnimation = ({ item }) => {
  // Intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the card is in view
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly moved down
      animate={{
        opacity: inView ? 1 : 0, // Trigger animation based on inView status
        y: inView ? 0 : 20, // Move the card to its normal position when in view
      }}
      transition={{ duration: 1, delay: 0.5 }} // Transition delay for smooth animation
    >
      <Card data={item} caption={item.post} />
    </motion.div>
  );
};

export default Services;
