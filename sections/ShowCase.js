import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title } from "@/components/common/Title";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

const ShowCase = () => {
  return (
    <section className="showcase bg-top">
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
            transition={{ duration: 1 }}
          >
            <Title title="Fresh ideas. Bold design. Smart realisation." className="title-bg" />
          </motion.div>
        </motion.div>

        <br />
        <br />
        <div className="grid-3">
          {showcase.map((item) => (
            <CardWithInView key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardWithInView = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the card is in view
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      className="card-wrapper showcasecard cool-card"
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly moved down
      animate={{
        opacity: inView ? 1 : 0, // Trigger animation based on inView status
        y: inView ? 0 : 20, // Move the card to its normal position when in view
      }}
      transition={{ duration: 1.5 }} // Smooth transition
    >
      <Card data={item} caption={item.post} />
      <div className="card btnhover links">
        <Link href={item.projectLink}>
          Click here to view the live project
          <HiOutlineArrowRight className="link-icon" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ShowCase;
