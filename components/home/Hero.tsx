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
    <section className="relative w-full bg-background overflow-hidden">
      {/* BACKGROUND */}

      <div
        className="
          absolute inset-0
          z-0
          from-primary/10
          via-background
          to-secondary/10
        "
      />
      <div className="absolute inset-0 z-0">
        <DotBackgroundDemo />
      </div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="
          relative z-10
          w-full
          px-4 sm:px-6 lg:px-14
          
          min-h-screen flex md:items-center
          
        "
      >
        <div
          className="
            w-full
            grid grid-cols-2
            gap-12
            md:grid-cols-5 md:gap-14
            
            
            md:items-center
           
          "
        >
          {/* RIGHT STACK (TOP ON MOBILE, RIGHT ON DESKTOP) */}
          <motion.div
            variants={item}
            className="
         
          
              order-1 md:order-2
              col-span-2 md:col-span-2
              flex justify-center items-end
            "
          >
            <Stack />
          </motion.div>

          {/* LEFT CONTENT */}
          <div
            className="h-full
              order-2 md:order-1
              col-span-2 md:col-span-3
              flex flex-col
              justify-start
              md:justify-end 
              gap-1 md:gap-3
              items-start
              text-left

              
              
            "
          >
            {/* BADGE */}
            <motion.div
              variants={item}
              className="mb-6 mx-auto md:mx-0 inline-flex bg-background items-center gap-2 px-3 py-1 rounded-full border border-primary"
            >
              <span className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary" />
                We Make Product Not Project
              </span>
            </motion.div>

            {/* HEADING */}
            <div className="flex flex-col gap-4">
              <motion.h1
                variants={item}
                className="
                w-full
                text-2xl sm:text-2xl
                md:text-5xl
                font-bold
                text-foreground
              "
              >
                Build a Brand People Notice With Professional Sign Boards
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                variants={item}
                className="
                text-sm
                md:text-lg
                text-foreground
                leading-relaxed
              "
              >
                We design and manufacture premium LED sign boards and complete
                branding solutions that make your business stand out, attract
                attention, and build instant trust. From concept and fabrication
                to final installation, we manage the entire process end-to-end.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div variants={item} className="w-full">
              <ButtonGradienat
                text="Learn More"
                icon={<ArrowRight size={16} />}
                className="w-full sm:w-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
