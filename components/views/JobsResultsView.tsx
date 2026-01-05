"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, MapPin, DollarSign, ChevronDown } from "lucide-react";
import { jobs, Job } from "@/data/jobs";

interface JobsResultsViewProps {
  uploadedFileName: string;
  onReset: () => void;
  onNewUpload: () => void;
}

export default function JobsResultsView({
  uploadedFileName,
  onReset,
  onNewUpload,
}: JobsResultsViewProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Sort jobs by match score (highest first)
  const sortedJobs = useMemo(() => {
    const jobsCopy = [...jobs];
    return jobsCopy.sort((a, b) => b.matchScore - a.matchScore);
  }, []);

  const getMatchColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800 border-green-300";
    if (score >= 70) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

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
            Vaše personalizované výsledky
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8">
          {/* Sidebar Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg sticky top-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-tatra-blue" />
                <div>
                  <p className="font-semibold text-tatra-black">Profil</p>
                  <p className="text-sm text-tatra-gray">{uploadedFileName || "CV.pdf"}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-sm text-tatra-gray">
                  Analyzované: <span className="font-semibold text-tatra-black">{jobs.length} pozícií</span>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onNewUpload}
                className="w-full bg-tatra-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors mb-3 flex items-center justify-center space-x-2"
              >
                <Upload className="w-5 h-5" />
                <span>Nahrať nové CV</span>
              </motion.button>

              <button
                onClick={onReset}
                className="w-full text-tatra-gray hover:text-tatra-black transition-colors text-sm"
              >
                Začať odznova
              </button>
            </motion.div>
          </div>

          {/* Main Content Right */}
          <div className="space-y-4">
            {sortedJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-tatra-black">{job.title}</h3>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getMatchColor(
                            job.matchScore
                          )}`}
                        >
                          {job.matchScore}% Zhoda
                        </motion.span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-tatra-gray">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedJobId === job.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-tatra-gray" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedJobId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <div className="p-6 space-y-6">
                        {/* Why */}
                        <div>
                          <h4 className="font-bold text-tatra-black mb-3">Prečo si sa zhodoval/a?</h4>
                          <p className="text-tatra-gray text-sm leading-relaxed">
                            Silná zhoda v technológiách ({job.matchedSkills.slice(0, 2).join(", ")}).
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {job.matchedSkills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Missing */}
                        <div>
                          <h4 className="font-bold text-tatra-black mb-3">Chýba ti:</h4>
                          <p className="text-tatra-gray text-sm">
                            {job.missingSkills.join(", ")}
                          </p>
                        </div>

                        {/* Odporúčanie */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-bold text-tatra-black mb-2">Odporúčanie:</h4>
                          <p className="text-tatra-gray text-sm leading-relaxed">
                            {job.aiRecommendation.split("Kickresume Tip:")[0].trim()}
                          </p>
                          {job.aiRecommendation.includes("Kickresume Tip:") && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <p className="text-sm leading-relaxed">
                                <span className="font-semibold text-kickresume-teal">Kickresume Tip:</span>{" "}
                                <span className="text-tatra-gray">
                                  {job.aiRecommendation.split("Kickresume Tip:")[1].trim()}
                                </span>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
}

