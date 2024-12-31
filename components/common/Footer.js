import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

// Fade-in animation for the entire footer and its elements
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible" // Triggers the animation when the element comes into view
      viewport={{ once: false, amount: 0.2 }} // Ensures animation happens each time
    >
      <div className="container">
        <div className="grid-4">
          <motion.div className="logo" variants={fadeIn} initial="hidden" animate="visible">
            <TitleLogo title="creative" caption="7" className="logobg" />
            <span>
              Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
            </span>
            <h3>+1 001 234 5678</h3>
            <button className="button-primary">Request for quote</button>
          </motion.div>

          <motion.ul variants={fadeIn} initial="hidden" animate="visible">
            <h3>COMPANY</h3>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">About agency</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Our team</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Showcase</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Blog</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Demo design system</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Contact</Link>
            </motion.li>
          </motion.ul>

          <motion.ul variants={fadeIn} initial="hidden" animate="visible">
            <h3>SERVICES</h3>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Web Design & Development</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Branding & Creative Services</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Digital Marketing</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">E-Commerce</Link>
            </motion.li>
          </motion.ul>

          <motion.ul variants={fadeIn} initial="hidden" animate="visible">
            <h3>CONNECT</h3>
            <motion.div className="connect" variants={fadeIn} initial="hidden" animate="visible">
              <motion.li whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <AiFillBehanceCircle size={25} />
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <AiFillInstagram size={25} />
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <AiFillLinkedin size={25} />
                </Link>
              </motion.li>
            </motion.div>
          </motion.ul>
        </div>

        <motion.div className="legal connect py" variants={fadeIn} initial="hidden" animate="visible">
          <div className="text">
            <span>© 2023 THE SEVEN. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="connect">
            <span>GORKCODER COMPANY</span>
            <span> &nbsp; | &nbsp; </span>
            <span>TERMS & CONDITIONS</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
