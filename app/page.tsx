"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import LandingView from "@/components/views/LandingView";
import JobsStandardView from "@/components/views/JobsStandardView";
import LoadingView from "@/components/views/LoadingView";
import JobsResultsView from "@/components/views/JobsResultsView";
import AnalyzeModal from "@/components/AnalyzeModal";

type ViewState = "LANDING" | "JOBS_STANDARD" | "LOADING" | "JOBS_RESULTS";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>("LANDING");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  const handleFileUpload = (fileName: string) => {
    setUploadedFileName(fileName);
    setIsModalOpen(false);
    setCurrentView("LOADING");
  };

  const handleBrowseOnly = () => {
    setCurrentView("JOBS_STANDARD");
  };

  const handleLoadingComplete = () => {
    setCurrentView("JOBS_RESULTS");
  };

  const handleReset = () => {
    setCurrentView("LANDING");
    setUploadedFileName("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <AnimatePresence mode="wait">
        {currentView === "LANDING" && (
          <LandingView
            key="landing"
            onAnalyzeClick={() => setIsModalOpen(true)}
            onBrowseClick={handleBrowseOnly}
          />
        )}
        
        {currentView === "JOBS_STANDARD" && (
          <JobsStandardView
            key="jobs-standard"
            onAnalyzeClick={() => setIsModalOpen(true)}
          />
        )}
        
        {currentView === "LOADING" && (
          <LoadingView
            key="loading"
            onComplete={handleLoadingComplete}
          />
        )}
        
        {currentView === "JOBS_RESULTS" && (
          <JobsResultsView
            key="jobs-results"
            uploadedFileName={uploadedFileName}
            onReset={handleReset}
            onNewUpload={() => setIsModalOpen(true)}
          />
        )}
      </AnimatePresence>

      <AnalyzeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAnalysisComplete={(fileName) => handleFileUpload(fileName)}
      />
    </div>
  );
}
