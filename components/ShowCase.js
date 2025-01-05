import React from "react";
import { Title } from "./common/Title";
import { showcase } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const ShowCase = () => {
  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="showcase">
      <div className="container">
        {/* Title with Fade-in Effect */}
        <motion.div
          className="heading-title"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title title="Selected Cases" />
        </motion.div>

        {/* Cards Section */}
        <div className="hero-content grid-3 py">
          {showcase.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              className="card-wrapper showcasecard cool-card"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="cool-card-content">
                <Card data={item} />
              </div>
              <div className="card btnhover links">
                <Link href={item.projectLink}>
                  Click here to view the live project
                  <HiOutlineArrowRight className="link-icon" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Cases Link */}
        <div className="card btnhover links">
          <Link href="/showcase">
            View All Cases <HiOutlineArrowRight className="link-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
