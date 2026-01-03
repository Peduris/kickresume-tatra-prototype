"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import CareerCoachCard from "@/components/CareerCoachCard";
import JobCard from "@/components/JobCard";
import AnalyzeModal from "@/components/AnalyzeModal";
import { jobs, Job } from "@/data/jobs";

export default function PositionsPage() {
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // After analysis, re-order jobs: Data Analyst (id: 2) moves to top, then sort by match score
  const sortedJobs = useMemo(() => {
    if (!hasAnalyzed) {
      return jobs;
    }

    const jobsCopy = [...jobs];
    const dataAnalystIndex = jobsCopy.findIndex((job) => job.id === "2");
    
    if (dataAnalystIndex !== -1) {
      const dataAnalyst = jobsCopy.splice(dataAnalystIndex, 1)[0];
      jobsCopy.sort((a, b) => b.matchScore - a.matchScore);
      return [dataAnalyst, ...jobsCopy];
    }
    
    return jobsCopy.sort((a, b) => b.matchScore - a.matchScore);
  }, [hasAnalyzed]);

  const handleAnalyzeClick = () => {
    setIsModalOpen(true);
  };

  const handleAnalysisComplete = () => {
    setHasAnalyzed(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-tatra-black mb-2">
            Jedna firma, dve značky. Vyber si z našich otvorených pozícií:
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
          {/* Left Column: Job List (70%) */}
          <div className="space-y-4">
            {sortedJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} hasAnalyzed={hasAnalyzed} />
            ))}
          </div>

          {/* Right Column: Career Coach Card (30%) */}
          <div>
            <CareerCoachCard
              onAnalyzeClick={handleAnalyzeClick}
              hasAnalyzed={hasAnalyzed}
            />
          </div>
        </div>
      </main>

      <AnalyzeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAnalysisComplete={handleAnalysisComplete}
      />
    </div>
  );
}

