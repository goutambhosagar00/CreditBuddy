import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple Orb */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[120px] opacity-20 mix-blend-screen"
      />
      
      {/* Neon Green Orb */}
      <motion.div
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#D9F99D] rounded-full blur-[120px] opacity-10 mix-blend-screen"
      />

      {/* Blue Orb for depth */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[40%] left-[50%] w-[250px] h-[250px] bg-blue-500 rounded-full blur-[100px] opacity-10 mix-blend-screen"
      />
    </div>
  );
}
