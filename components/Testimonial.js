import React from "react";
import { TitleSm } from "./common/Title";
import Link from "next/link";
import { testimonial } from "@/assets/data/dummydata";
import { HiOutlineArrowRight } from "react-icons/hi";
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className="slick-arrow">
//       <button className="next" onClick={onClick}>
//         <RiArrowRightSLine size={25} />
//       </button>
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className="slick-arrow">
//       <button className="prev" onClick={onClick}>
//         <RiArrowLeftSLine size={25} />
//       </button>
//     </div>
//   );
// }

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 0.5, // Adjust speed for automatic sliding
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardAnimation = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="testimonial">
      <div className="container">
        <motion.div
          className="heading-title"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TitleSm title="WHAT CLIENTS SAY ABOUT OUR WORK" />
        </motion.div>
        <motion.div
          className="cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          layout
        >
          <Slider {...settings}>
            {testimonial.map((user, index) => (
              <motion.div
                key={index}
                className="card-container"
                variants={cardAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="card">
                  <div className="image">
                    <div className="img">
                      <motion.img
                        src={user.cover}
                        alt=""
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="img-text">
                      <h3>{user.name}</h3>
                      <span>{user.post}</span>
                    </div>
                  </div>
                  <div className="details">
                    <p>{user.desc}</p>
                    <Link href="/#">
                      VIEW CASE <HiOutlineArrowRight className="link-icon" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
