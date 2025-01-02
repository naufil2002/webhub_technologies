import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <>
      <section className="contact bg-top min-h-screen flex items-center justify-center">
        <div className="container max-w-screen-lg w-full p-4">
          <div className="heading-title text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Title title="Let's start right now!" className="title-bg" />
            </motion.div>
          </div>
          <div className="content py flex flex-wrap justify-center gap-8">
            {/* Left Section */}
            <motion.div
              className="left w-full sm:w-1/2 lg:w-1/3"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>1-001-234-5678</h3>
                  <span className="fs">Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>New York</h3>
                  <span className="fs">990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@dream-theme.com</h3>
                  <span className="fs">Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>hr@dream-theme.com</h3>
                  <span className="fs">Career at Seven Creative</span>
                </div>
              </div>
              <ul className="flex justify-center space-x-4">
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="right w-full sm:w-1/2 lg:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">Got questions? Ideas? Fill out the form below to get our proposal.</p>

              <form>
                <div className="grid-2 sm:grid-2">
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Name</span>
                    <input type="text" placeholder="name" style={{ height: "30px", fontSize: "14px", padding: "5px" }} />
                  </div>
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Email</span>
                    <input type="text" placeholder="email" style={{ height: "30px", fontSize: "14px", padding: "5px" }} />
                  </div>
                </div>
                <div className="grid-2 sm:grid-2">
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Your budget</span>
                    <input type="text" placeholder="budget" style={{ height: "30px", fontSize: "14px", padding: "5px" }} />
                  </div>
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Timeframe</span>
                    <input type="text" placeholder="time" style={{ height: "30px", fontSize: "14px", padding: "5px" }} />
                  </div>
                </div>
                <div className="inputs">
                  <span style={{ fontSize: "14px" }}>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                    placeholder="Share a few details about your project"
                    cols="30"
                    rows="3"
                    style={{ height: "80px", fontSize: "14px", padding: "5px", resize: "none" }}
                  ></textarea>
                </div>
                <button className="button-primary" style={{ padding: "8px 15px", fontSize: "14px" }}>
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
