"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import Image from "next/image";

import heroImage1 from "../assets/heroImage1.png";
import heroImage2 from "../assets/heroImage2.png";
import heroImage3 from "../assets/heroImage3.png";
/* ✅ TEMP DATA (REUSING SAME IMAGE FOR NOW) */
const SIGNAGE_CARDS = [
  { id: 1, image: heroImage1 },
  { id: 2, image: heroImage2 },
  { id: 3, image: heroImage1 },
  { id: 4, image: heroImage3 },
  { id: 5, image: heroImage2 },
  { id: 6, image: heroImage1 },
];

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
}: {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: any, info: any) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
}: {
  randomRotation?: boolean;
  sensitivity?: number;
}) {
  const [stack, setStack] = useState(SIGNAGE_CARDS);

  const sendToBack = (id: number) => {
    setStack((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((c) => c.id === id);
      const [card] = updated.splice(index, 1);
      updated.unshift(card);
      return updated;
    });
  };

  return (
    <div className="relative w-72 h-80 md:w-105 md:h-126 perspective-[600px]">
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              {/* IMAGE */}
              <Image
                src={card.image.src}
                alt="Signage work"
                priority={index === stack.length - 1} // top card priority
                className="object-cover select-none pointer-events-none"
                layout="fill"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
