"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LandingViewProps {
  onAnalyzeClick: () => void;
  onBrowseClick: () => void;
}

export default function LandingView({ onAnalyzeClick, onBrowseClick }: LandingViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100vh-80px)] bg-[#212121] relative overflow-hidden"
    >
      {/* Background decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gray-400 transform -skew-y-12"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-400 transform -skew-y-12"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gray-400 transform -skew-y-12"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Section: Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                Buď prirodzene najlepší na tej správnej pozícii.
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Nehľadaj len prácu, objav svoju kariéru. Náš AI asistent okamžite analyzuje tvoj profil, nájde dokonalú zhodu v tíme Tatra Banky a poradí ti, ako svoje šance ešte zvýšiť.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAnalyzeClick}
                className="bg-[#F5E6D3] text-[#212121] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#E8D4B8] transition-all"
              >
                Analyzovať životopis
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBrowseClick}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Zobraziť všetky otvorené pozície
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section: Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Image collage - overlapping images */}
            <div className="relative w-full h-full">
              {/* Top-right image */}
              <div className="absolute top-0 right-0 w-64 h-80 rounded-lg overflow-hidden shadow-2xl z-30">
                <Image
                  src="/picture1.png"
                  alt="Professional team"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle-left image */}
              <div className="absolute top-32 left-0 w-64 h-80 rounded-lg overflow-hidden shadow-2xl z-20">
                <Image
                  src="/picture2.png"
                  alt="Workplace collaboration"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-left image */}
              <div className="absolute bottom-0 left-16 w-64 h-80 rounded-lg overflow-hidden shadow-2xl z-10">
                <Image
                  src="/picture3.jpg"
                  alt="Professional environment"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
