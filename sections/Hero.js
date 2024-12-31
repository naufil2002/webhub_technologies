import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const subHeadingVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
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

  return (
    <>
      <motion.section className="hero" initial="hidden" animate="visible">
        <motion.div
          className="container newhero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          BUILDING WEBSITES THAT BUILD YOUR BUSINESS

        </motion.div>
      </motion.section>

      <motion.section
        className="hero-sec"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="heading-title"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Title title="Transforming Your Vision Into Reality" />
            <p>
              At WebHub Technologies, we specialize in crafting innovative web
              solutions and optimizing online visibility. Whether you're a
              startup or an established business, our team ensures your digital
              presence resonates with your audience and drives results.
            </p>
          </motion.div>

          <motion.div className="hero-content grid-4">
            {home.map((item, i) => (
              <motion.div
                className="box"
                key={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="green">{item.icon}</span>
                <br />
                <br />
                <h3>{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title title="Latest Insights & Articles" />
        </motion.div>
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
