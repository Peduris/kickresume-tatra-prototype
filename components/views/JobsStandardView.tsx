"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { jobs } from "@/data/jobs";

interface JobsStandardViewProps {
  onAnalyzeClick: () => void;
}

export default function JobsStandardView({ onAnalyzeClick }: JobsStandardViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100vh-80px)]"
    >
      <main className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-tatra-black mb-2">
            Otvorené pozície v Tatra Banke
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
          {/* Main Content: Job Grid */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-tatra-black mb-3">{job.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-tatra-gray mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  {job.department && (
                    <span className="text-tatra-gray">{job.department}</span>
                  )}
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{job.publishedDate || new Date().toLocaleDateString("sk-SK")}</span>
                  </div>
                </div>
                <p className="text-tatra-gray text-sm leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sidebar: Promo Card */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-tatra-black mb-4">
                Chcete vedieť, ktorá pozícia je pre vás?
              </h2>
              <p className="text-tatra-gray text-sm mb-6 leading-relaxed">
                Použite AI Coach na analýzu vášho CV a získanie personalizovaných odporúčaní.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onAnalyzeClick}
                className="w-full bg-tatra-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Spustiť AI Coach
              </motion.button>
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

