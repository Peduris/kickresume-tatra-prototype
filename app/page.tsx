"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Target, FileText } from "lucide-react";
import Header from "@/components/Header";
import AnalyzeModal from "@/components/AnalyzeModal";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleAnalysisComplete = () => {
    setIsModalOpen(false);
    router.push("/positions");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-[#F5E6D3] px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-[#212121]" />
            <span className="text-[#212121] font-medium">#prirodzenenajlepsi</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-tatra-black mb-6 leading-tight">
            Tatra Banka ti pomáha byť
            <br />
            <span className="text-tatra-blue">najlepším kandidátom</span>
          </h1>

          <p className="text-xl text-tatra-gray max-w-3xl mx-auto leading-relaxed mb-8">
            S umelou inteligenciou môžeš analyzovať svoj profil a životopis. 
            Zisti, aký by mal byť tvoj ďalší kariérny krok, čo zlepšiť a ako sa pripraviť na pohovor.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold text-tatra-black mb-12"
          >
            Nech AI asistuje tebe.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-tatra-blue/10 rounded-full mb-4">
              <FileText className="w-8 h-8 text-tatra-blue" />
            </div>
            <h3 className="text-lg font-bold text-tatra-black mb-2">
              Analýza životopisu
            </h3>
            <p className="text-tatra-gray text-sm">
              Nahraj svoj životopis a zisti, ako sa zlepšiť
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-kickresume-teal/10 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-kickresume-teal" />
            </div>
            <h3 className="text-lg font-bold text-tatra-black mb-2">
              Kariérny krok
            </h3>
            <p className="text-tatra-gray text-sm">
              Zisti, aká pozícia je pre teba najlepšia
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-tatra-blue/10 rounded-full mb-4">
              <Target className="w-8 h-8 text-tatra-blue" />
            </div>
            <h3 className="text-lg font-bold text-tatra-black mb-2">
              Príprava na pohovor
            </h3>
            <p className="text-tatra-gray text-sm">
              Získaj tipy, ako sa pripraviť na pohovor
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-tatra-blue text-white px-12 py-6 rounded-lg font-bold text-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center space-x-3 mx-auto"
          >
            <span>Zobraziť otvorené pozície a moje skóre</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-tatra-gray text-sm">
            Powered by <span className="font-semibold text-kickresume-teal">Kickresume</span>
          </p>
        </motion.div>
      </main>

      <AnalyzeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAnalysisComplete={handleAnalysisComplete}
      />
    </div>
  );
}
