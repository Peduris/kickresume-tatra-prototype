"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, TrendingUp, Target } from "lucide-react";

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
      className="min-h-[calc(100vh-80px)] flex flex-col"
    >
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-tatra-black mb-6 leading-tight">
            Buď prirodzene najlepší kandidát.
          </h1>
          
          <p className="text-2xl text-tatra-gray max-w-3xl mx-auto leading-relaxed mb-12">
            Nehľadajte prácu. Nechajte AI nájsť tú dokonalú pre vás.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAnalyzeClick}
              className="bg-tatra-blue text-white px-12 py-6 rounded-lg font-bold text-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center space-x-3"
            >
              <span>Analyzovať moje CV</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBrowseClick}
              className="bg-transparent border-2 border-tatra-gray text-tatra-gray px-12 py-6 rounded-lg font-bold text-xl hover:bg-gray-50 transition-all"
            >
              Len prezerať pozície
            </motion.button>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-tatra-blue/10 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-tatra-blue" />
            </div>
            <h3 className="text-2xl font-bold text-tatra-black mb-3">
              Správna zhoda
            </h3>
            <p className="text-tatra-gray leading-relaxed">
              AI nájde pozície, ktoré skutočne zodpovedajú vašim zručnostiam a skúsenostiam
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-kickresume-teal/10 rounded-full mb-6">
              <FileText className="w-10 h-10 text-kickresume-teal" />
            </div>
            <h3 className="text-2xl font-bold text-tatra-black mb-3">
              Konštruktívna spätná väzba
            </h3>
            <p className="text-tatra-gray leading-relaxed">
              Získajte konkrétne odporúčania, čo zlepšiť vo vašom CV a profil
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-tatra-blue/10 rounded-full mb-6">
              <Target className="w-10 h-10 text-tatra-blue" />
            </div>
            <h3 className="text-2xl font-bold text-tatra-black mb-3">
              Rozvoj zručností
            </h3>
            <p className="text-tatra-gray leading-relaxed">
              Odporúčania na kurzy a certifikácie, ktoré zvýšia vašu hodnotu na trhu
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-tatra-gray text-sm">
            © 2025 Tatra Banka. Powered by <span className="font-semibold text-kickresume-teal">Kickresume</span>
          </p>
        </div>
      </footer>
    </motion.div>
  );
}

