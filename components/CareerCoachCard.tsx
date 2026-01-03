"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CareerCoachCardProps {
  onAnalyzeClick: () => void;
  hasAnalyzed: boolean;
}

export default function CareerCoachCard({ onAnalyzeClick, hasAnalyzed }: CareerCoachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-20 bg-white border border-gray-200 rounded-lg p-6 shadow-lg"
    >
      <div className="flex items-center space-x-2 mb-3">
        <Sparkles className="w-5 h-5 text-kickresume-teal" />
        <h2 className="text-xl font-bold text-tatra-black">
          Prirodzene najlepší Kariérny Poradca
        </h2>
      </div>
      
      <p className="text-sm text-kickresume-teal font-medium mb-2">
        Powered by Kickresume
      </p>
      
      <p className="text-tatra-gray text-sm mb-6 leading-relaxed">
        Skontroluj svoj životopis a nájdi správnu pozíciu v Tatra Banke. Nech AI ti povie, ktorá pozícia je pre teba najlepšia, prečo a ako sa môžeš zlepšiť.
      </p>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onAnalyzeClick}
        className="w-full bg-tatra-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
      >
        {hasAnalyzed ? "Analyzovať znova" : "Analyzovať moju zhodu"}
      </motion.button>
    </motion.div>
  );
}
