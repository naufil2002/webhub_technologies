import React from "react"
import { Card } from "./common/Card"
import { blogdata } from "@/assets/data/dummydata"
import { motion } from "framer-motion"
import { HiOutlineArrowRight } from "react-icons/hi"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

const BlogCard = () => {
  return (
    <div className="container blog-card grid-2 py">
      {blogdata.map((item) => (
        <motion.div
          key={item.id}
          className="card-wrapper cool-card"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.05,
            rotate: 1,
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="cool-card-content">
            <Card data={item} path="blogs" />
            <div className="hover-overlay blogcard">
              <h3>Explore</h3>
              <p>Click to learn more about this post.</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default BlogCard
