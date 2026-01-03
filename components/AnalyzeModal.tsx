"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Link as LinkIcon, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface AnalyzeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAnalysisComplete: () => void;
}

type AnalysisState = "input" | "loading" | "complete";

const loadingMessages = [
  "Skenovanie profilu...",
  "Analýza zručností...",
  "Porovnávanie s kultúrou Tatra Banky...",
  "Výpočet skóre zhody...",
];

export default function AnalyzeModal({
  isOpen,
  onClose,
  onAnalysisComplete,
}: AnalyzeModalProps) {
  const [state, setState] = useState<AnalysisState>("input");
  const [file, setFile] = useState<File | null>(null);
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (state === "loading") {
      const messageInterval = setInterval(() => {
        setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
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
        setState("complete");
        setProgress(100);
        setTimeout(() => {
          onAnalysisComplete();
          handleClose();
        }, 500);
      }, 10000);

      return () => {
        clearInterval(messageInterval);
        clearInterval(progressInterval);
        clearTimeout(timeout);
      };
    }
  }, [state, onAnalysisComplete]);

  const handleAnalyze = () => {
    if (file || linkedInUrl.trim()) {
      setState("loading");
    }
  };

  const handleClose = () => {
    setState("input");
    setFile(null);
    setLinkedInUrl("");
    setProgress(0);
    setCurrentLoadingMessage(0);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-tatra-black">
                    Analyzovať moju zhodu
                  </h2>
                  <button
                    onClick={handleClose}
                    className="text-tatra-gray hover:text-tatra-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {state === "input" && (
                    <motion.div
                      key="input"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium text-tatra-black mb-2">
                          Nahrať životopis
                        </label>
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-tatra-gray" />
                            <p className="mb-2 text-sm text-tatra-gray">
                              <span className="font-semibold">Klikni na nahratie</span> alebo presuň súbor
                            </p>
                            <p className="text-xs text-tatra-gray">PDF, DOC, DOCX (MAX. 5MB)</p>
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                        </label>
                        {file && (
                          <p className="mt-2 text-sm text-tatra-gray">
                            Vybraté: {file.name}
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-tatra-gray">ALEBO</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-tatra-black mb-2">
                          Vložiť LinkedIn URL
                        </label>
                        <div className="relative">
                          <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-tatra-gray" />
                          <input
                            type="text"
                            placeholder="https://linkedin.com/in/tvojprofil"
                            value={linkedInUrl}
                            onChange={(e) => setLinkedInUrl(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tatra-blue focus:border-transparent"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleAnalyze}
                        disabled={!file && !linkedInUrl.trim()}
                        className="w-full bg-tatra-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Analyzovať
                      </button>
                    </motion.div>
                  )}

                  {state === "loading" && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="space-y-6 py-8"
                    >
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Loader2 className="w-12 h-12 text-tatra-blue" />
                        </motion.div>
                        <motion.p
                          key={currentLoadingMessage}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-lg font-medium text-tatra-black"
                        >
                          {loadingMessages[currentLoadingMessage]}
                        </motion.p>
                      </div>

                      <div className="space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <motion.div
                            className="bg-tatra-blue h-2.5 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>
                        <p className="text-sm text-center text-tatra-gray">
                          {progress}% Hotovo
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
