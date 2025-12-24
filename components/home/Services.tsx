"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import SectionTitle from "../utils/SectionTitle";
import { homeServices } from "@/data/data";

/* =====================
   Framer Motion Variants
===================== */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

/* =====================
   Component
===================== */

const Services = () => {
  return (
    <section className="w-full bg-background py-12">
      <div className="px-4 sm:px-6 lg:px-14">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <SectionTitle title="Our" highlight="Services" />
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {homeServices.map((service) => (
            <motion.div
              key={service.id}
              variants={card}
              className="group rounded-xl border bg-card overflow-hidden transition hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-44 lg:h-40 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
