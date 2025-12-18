"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh]  flex items-center bg-background">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* Badge wrapper (center + top spacing) */}
        {/* <div className="w-full flex justify-center mb-10">
      <motion.div
        variants={item}
        className="
          inline-flex items-center gap-2
          border border-border
          rounded-full
          px-4 py-1
          text-sm text-foreground/80
        "
      >
        <span className="w-2 h-2 rounded-full bg-primary"></span>
        <span>We Make Product Not Project</span>
      </motion.div>
    </div> */}

        {/* Main content stays left aligned */}
        <div className="max-w-3xl">
          <motion.h1
            variants={item}
            className="
          text-4xl md:text-5xl lg:text-6xl
          font-bold leading-tight
          text-foreground
        "
          >
            Build a Strong Brand
            <br />
            With Professional Sign Boards
          </motion.h1>

          <motion.p
            variants={item}
            className="
          mt-6
          text-base md:text-lg
          text-foreground/70
          leading-relaxed
        "
          >
            We create high-quality LED sign boards and branding solutions that
            help your business look professional, visible, and trustworthy. From
            design to installation, we handle everything.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <Link
              href="/about"
              className="
            inline-flex items-center justify-center
            px-6 py-3
            rounded-md
            bg-primary text-primary-foreground
            text-base font-medium
            transition-opacity hover:opacity-90
          "
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
