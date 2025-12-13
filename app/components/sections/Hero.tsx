"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/bg-hero.jpeg"
          alt="Team collaboration"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-shell w-full py-16 md:py-24">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl max-[375px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 text-white"
          >
            Transform Your Business with{" "}
            <span className="text-primary-light">Cutting-Edge Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm max-[375px]:text-xs sm:text-base md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            From custom software development to digital marketing excellence. We
            deliver 134 specialized services across 4 core categories to help
            your business thrive.
          </motion.p>

          {/* Key Points - Grid Layout */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12 justify-items-center px-4"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-3 bg-white/5 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 max-w-sm w-full"
            >
              <div className="shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base mb-1">
                  10+ Years
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Expert team experience
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-3 bg-white/5 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 max-w-sm w-full"
            >
              <div className="shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base mb-1">
                  500+ Projects
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Successfully delivered
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-3 bg-white/5 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 max-w-sm w-full"
            >
              <div className="shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base mb-1">
                  98% Satisfaction
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Client satisfaction rate
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 max-[375px]:text-sm"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 max-[375px]:w-4 max-[375px]:h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 max-[375px]:text-sm"
            >
              <Play className="w-5 h-5 mr-2 max-[375px]:w-4 max-[375px]:h-4" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-32 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2 backdrop-blur-sm"
          >
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
