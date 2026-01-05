"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Brain, Radar } from "lucide-react";

interface LoadingViewProps {
  onComplete: () => void;
}

const loadingMessages = [
  "Načítavam profil...",
  "Analyzujem skúsenosti...",
  "Porovnávam s kultúrou Tatra Banky...",
  "Vypočítavam zhodu...",
];

export default function LoadingView({ onComplete }: LoadingViewProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      setProgress(100);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 10000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Pulsing Brain/Radar Animation */}
        <div className="relative mb-12">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-32 h-32 border-4 border-tatra-blue rounded-full" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative flex items-center justify-center"
          >
            <Radar className="w-24 h-24 text-tatra-blue" />
          </motion.div>
        </div>

        {/* Loading Message */}
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-8"
        >
          <p className="text-2xl font-semibold text-tatra-black">
            {loadingMessages[currentMessage]}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-tatra-blue h-3 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <p className="text-sm text-tatra-gray">
            {progress}% Hotovo
          </p>
        </div>
      </div>
    </motion.div>
  );
}

