import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { send } from "@emailjs/browser";
import { BiUserCircle } from "react-icons/bi";
import { FiHeadphones } from "react-icons/fi";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    projectDetails: "",
  });

  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      name: formData.name,
      email: formData.email,
      budget: formData.budget,
      timeframe: formData.timeframe,
      projectDetails: formData.projectDetails,
    };

    send(
      "service_0o2fx8j", // Replace with your EmailJS service ID
      "template_w21673i", // Replace with your EmailJS template ID
      templateParams,
      "5jypyq6QcXB2VODbZ" // Replace with your EmailJS public key
    )
      .then((response) => {
        setMessage("Your message has been sent successfully!");
        setShowPopup(true);
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          budget: "",
          timeframe: "",
          projectDetails: "",
        });
      })
      .catch((error) => {
        setMessage("Failed to send your message. Please try again.");
        setLoading(false);
      });
  };

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
              {/* Contact details */}
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>
                    <a href="tel:+919834070695" className="contact-link">
                      +91 9834070695
                    </a>
                  </h3>
                  <span className="fs">Call us: 24/7</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Mumbai</h3>
                  <span className="fs">We exist everywhere, but our vibe? Purely in your mind.</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>
                    <a
                      href="mailto:webhubtechnologi3s@gmail.com"
                      className="contact-link"
                    >
                      webhubtechnologi3s@gmail.com
                    </a>
                  </h3>
                  <span className="fs">Drop us a line anytime!</span>
                </div>
              </div>
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
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Form inputs */}
                <div className="grid-2 sm:grid-2">
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="name"
                      required
                    />
                  </div>
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid-2 sm:grid-2">
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Your budget</span>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="budget"
                    />
                  </div>
                  <div className="inputs">
                    <span style={{ fontSize: "14px" }}>Timeframe</span>
                    <input
                      type="text"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      placeholder="time"
                    />
                  </div>
                </div>
                <div className="inputs">
                  <span style={{ fontSize: "14px" }}>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Share a few details about your project"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button-primary"
                >
                  Submit
                </button>
              </form>

              {message && <p className="message">{message}</p>}
            </motion.div>
          </div>

          {/* Success Popup */}
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <div className="checkmark">&#10003; <p>Sent Successfully</p></div>
              </div>
            </div>
          )}

          {/* Loading Popup */}
          {loading && (
            <div className="loading-popup">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          border: 2px solid green;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          animation: fadeInOut 3s forwards;
          z-index: 1000;
        }

        .popup-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .checkmark {
          color: green;
          font-size: 2rem;
          margin-bottom: 10px;
          text-align: center;
        }

        .loading-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          padding: 20px;
          z-index: 1000;
        }

        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid green;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
