import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';  // Importing framer-motion
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when element is in view
    threshold: 0.5, // 50% of the element needs to be in view
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <motion.section
        className='agency bg-top'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='container'>
          <div className='heading-title'>
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <TitleSm title='ABOUT OUR AGENCY' />
            </motion.div> */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
              <Title title='The ultimate web development agency for your business growth!' className='title-bg' />
            </motion.div>
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <TitleSm title='Transforming ideas into dynamic web solutions since 2001' />
              </motion.div>
              <motion.p
                className='desc-p'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                We craft innovative and tailor-made online platforms that help businesses thrive in the digital world. From website creation to advanced web applications, we turn your visions into reality.
              </motion.p>

              <div className='grid-3'>
                <div className='box' ref={counterRef}>
                  {inView && (
                    <motion.h1
                      className='indigo'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <CountUp start={0} end={10} duration={3} />+
                    </motion.h1>
                  )}
                  <h3>Years of web development experience</h3>
                </div>
                <div className='box' ref={counterRef}>
                  {inView && (
                    <motion.h1
                      className='indigo'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <CountUp start={0} end={50} duration={3} />+
                    </motion.h1>
                  )}
                  <h3>Successful website launches</h3>
                </div>
                <div className='box' ref={counterRef}>
                  {inView && (
                    <motion.h1
                      className='indigo'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <CountUp start={0} end={12} duration={3} />+
                    </motion.h1>
                  )}
                  <h3>Web industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <motion.img
                src='/images/s1.jpg'
                alt='Web development team'
                className='round'
                width='100%'
                height='100%'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <motion.img
                src='/images/s4.jpg'
                alt='Mission'
                className='round'
                width='100%'
                height='100%'
                initial={{ opacity: 0 }}
                animate={{ opacity: missionInView ? 1 : 0 }} // Trigger animation when missionInView is true
                transition={{ duration: 1 }}
              />
            </div>
            <div className='right w-60 ml' ref={missionRef}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: missionInView ? 1 : 0 }} // Trigger animation on missionInView
                transition={{ duration: 1 }}
              >
                <TitleSm title='Our Mission' />
              </motion.div>
              <br />
              <motion.p
                className='misson-p'
                initial={{ opacity: 0 }}
                animate={{ opacity: missionInView ? 1 : 0 }} // Trigger animation on missionInView
                transition={{ duration: 1, delay: 0.2 }}
              >
                Our mission is to empower businesses by delivering cutting-edge web solutions that elevate user experiences, enhance online visibility, and drive measurable growth. We bring ideas to life through custom websites, e-commerce solutions, and interactive web apps that engage customers and generate results.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
