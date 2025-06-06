"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-[#f0f4ff] dark:bg-[#0d1117] text-[#1e293b] dark:text-white">
      <div className="absolute top-1/3 left-1/4 w-10 h-10 md:w-96 md:h-96 bg-[#3b82f6]/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-80 md:h-80 bg-[#6366f1]/10 rounded-full filter blur-3xl animate-pulse delay-700" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-[#e0ecff] text-[#3b82f6] dark:bg-[#1e2a48] dark:text-[#60a5fa] rounded-full text-sm font-medium mb-6"
            >
              IT Engineering Student
            </motion.span>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#6366f1]">
                  Nolann Moisis
                </span>
              </h1>
            </div>

            <p className="text-[#334155] dark:text-[#cbd5e1] text-lg lg:text-xl mt-8 mb-10 leading-relaxed max-w-2xl">
              Currently student at ESIEA, I enjoy R&D and working on interesting projects requiring multiple skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link href="#projects" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#3b82f6]/30"
              >
                <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  My Projects
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.button>
              </Link>
              <Link href="#webprojects" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#3b82f6]/30"
              >
                <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  My Web Projects
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.button>
              </Link>
              <Link href="#contact" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border border-[#3b82f6]/30 hover:border-[#3b82f6] text-[#3b82f6] dark:text-[#60a5fa] rounded-xl transition-all duration-300 hover:bg-[#3b82f6]/10"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact me
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </span>
              </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
