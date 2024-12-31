import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  // Fade-in animation variant for title
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Slider settings for continuous scrolling without arrows
  const settings = {
    dots: false, // Disable dots
    infinite: true, // Infinite loop
    speed: 3000, // Speed of sliding
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Autoplay speed set to 0 for seamless looping
    cssEase: "linear", // Smooth scrolling effect
    swipeToSlide: true, // Enable swipe support for mobile
    centerMode: true, // Center the current slide
    centerPadding: "60px", // Set smaller padding to reduce the gap between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Adjust for small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="brand">
      <div className="container">
        <motion.div
          className="heading-title"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title title="WE ARE PROUD TO WORK WITH THESE COMPANIES" />
        </motion.div>

        {/* Slider for brand images */}
        <motion.div
          className="brand-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Slider {...settings}>
            {brand.map((item, index) => (
              <motion.div
                key={item.id}
                className="brand-image-wrapper"
                whileHover={{
                  scale: 1.1, // Slight zoom-in effect
                  rotateY: 10, // Slight rotation effect
                  transition: { duration: 0.3 },
                }}
                style={{
                  display: "inline-block",
                  width: "auto",
                  height: "auto",
                }}
              >
                <div className="images">
                  <img
                    src={item.cover}
                    alt={item.id}
                    width="100%"
                    height="100%"
                    style={{
                      maxWidth: "200px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
