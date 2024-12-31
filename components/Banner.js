import React from "react";
import { Title, TitleLogo } from "./common/Title";
import { motion } from "framer-motion";

const Banner = () => {
  // Animation variants for the titles
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for the button
  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5 } },
  };

  return (
    <section className="banner">
      <div className="container">
        {/* Animated Title */}
        <motion.div
          className="banner-text"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title title="We are looking forward to start a new project" />
          <br />
          <TitleLogo title="Let's take your business to the next level!" />
        </motion.div>

        {/* Animated Button */}
        <motion.div
          className="button-container"
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <button className="button-primary">Request a call-back</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
