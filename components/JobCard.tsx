"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, DollarSign } from "lucide-react";
import { useState } from "react";
import { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
  index: number;
  hasAnalyzed: boolean;
}

export default function JobCard({ job, index, hasAnalyzed }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMatchColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800 border-green-300";
    if (score >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-bold text-tatra-black">{job.title}</h3>
              {hasAnalyzed && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${getMatchColor(
                    job.matchScore
                  )}`}
                >
                  {job.matchScore}% Zhoda
                </motion.span>
              )}
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
            <p className="text-tatra-gray text-sm mt-3 line-clamp-2">
              {job.description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-tatra-gray" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200 bg-gray-50"
          >
            <div className="p-6 space-y-6">
              {/* Section A: Why you matched */}
              <div>
                <h4 className="font-bold text-tatra-black mb-3">Prečo si sa zhodoval/a?</h4>
                <p className="text-tatra-gray text-sm leading-relaxed">
                  Tvoja skúsenosť s {job.matchedSkills.slice(0, 2).join(" a ")} sa dokonale zhoduje s požiadavkami nášho tímu {job.title.split(" ")[0]}.
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

              {/* Section B: Skills Gap (Odporúčanie) */}
              <div>
                <h4 className="font-bold text-tatra-black mb-3">
                  Chýbajúce zručnosti (Odporúčanie)
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-tatra-gray text-sm mb-2">
                      <span className="font-semibold">Chýba ti:</span>{" "}
                      {job.missingSkills.join(", ")}
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-tatra-gray text-sm leading-relaxed mb-2">
                      <span className="font-semibold">Odporúčanie:</span>{" "}
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
