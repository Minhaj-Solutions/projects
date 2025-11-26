'use client'

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Play } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/Button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

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
}

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
}

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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-primary-dark/50"></div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-16 md:py-24">
        <motion.div
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full font-semibold uppercase text-xs tracking-wider mb-8 backdrop-blur-md border border-primary/30"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Professional Technology Services
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 text-white"
          >
            Transform Your Business with{" "}
            <span className="text-primary-light">
              Cutting-Edge Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 md:mb-12 max-w-3xl leading-relaxed font-light"
          >
            From custom software development to digital marketing excellence.
            We deliver 134 specialized services across 4 core categories to help your business thrive.
          </motion.p>

          {/* Key Points - Grid Layout */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-white font-semibold text-base mb-1">10+ Years</p>
                <p className="text-gray-300 text-sm">Expert team experience</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-white font-semibold text-base mb-1">500+ Projects</p>
                <p className="text-gray-300 text-sm">Successfully delivered</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-white font-semibold text-base mb-1">98% Satisfaction</p>
                <p className="text-gray-300 text-sm">Client satisfaction rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
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
  )
}

