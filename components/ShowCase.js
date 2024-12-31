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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
          {showcase.map((item, index) => (
            <motion.div
              key={item.id}
              className="card-wrapper cool-card"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.1,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="cool-card-content">
                <Card data={item} />
                <div className="hover-overlay">
                  <h3>Explore</h3>
                  <p>Click to learn more about this case.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Cases Link */}
        <div className="card links">
          <Link href="/">
            VIEW ALL CASES <HiOutlineArrowRight className="link-icon" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cool-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .cool-card:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .cool-card-content {
          position: relative;
          z-index: 1;
        }

        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: 2;
        }

        .cool-card:hover .hover-overlay {
          opacity: 1;
        }

        .hover-overlay h3 {
          font-size: 1.5rem;
          margin: 0;
        }

        .hover-overlay p {
          font-size: 1rem;
          margin-top: 8px;
        }
      `}</style>
    </section>
  );
};

export default ShowCase;
