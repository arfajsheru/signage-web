"use client";

import { motion } from "framer-motion";
import Stack from "../Stack";
import DotBackgroundDemo from "../utils/DotBackgroundDemo";
import { ButtonGradienat } from "../ui/buttons";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <DotBackgroundDemo />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="
          relative z-10
          h-screen
          px-4 sm:px-6 lg:px-14
          pt-16
          flex items-center
        "
      >
        <div className="grid grid-cols-1 h-full md:grid-cols-5  w-full items-center">
          {/* LEFT */}
          <div className="md:col-span-3 text-center md:text-left  h-full flex flex-col justify-center items-start">
            <motion.div
              variants={item}
              className="mb-4 mx-auto md:mx-0 w-fit inline-flex items-center gap-2 px-3 border-primary py-1 rounded-full border"
            >
              <span className="text-sm font-medium relative z-10 flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                We Make Product Not Project
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-2xl text-start  md:text-6xl font-bold text-foreground"
            >
              Build a Strong Brand With Professional Sign Boards
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-start  text-xs md:text-lg text-foreground/70 line-clamp-3"
            >
              We create high-quality LED sign boards and branding solutions that
              help your business look professional, visible, and trustworthy.
              From design to installation, we handle everything.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6  flex justify-center md:justify-start"
            >
              <ButtonGradienat
                text="Learn More"
                icon={<ArrowRight size={16} />}
                className="w-full sm:w-auto"
              />
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={item}
            className="md:col-span-2 flex justify-center items-center  h-full"
          >
            <Stack />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
