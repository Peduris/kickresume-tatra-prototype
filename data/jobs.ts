export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  aiRecommendation: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Java Developer",
    location: "Bratislava",
    salary: "3 500 €",
    matchScore: 72,
    matchedSkills: ["Java", "Spring Boot", "SQL", "Agile"],
    missingSkills: ["Kubernetes", "Microservices"],
    aiRecommendation: "Complete a Kubernetes certification to increase your salary potential by 20%. Your Java experience aligns well with our backend team. Kickresume Tip: Highlight your Spring Boot projects in your CV's project section to showcase your framework expertise.",
    description: "We are looking for an experienced Java developer to join our core banking platform team. You will work on mission-critical systems and collaborate with cross-functional teams.",
  },
  {
    id: "2",
    title: "Data Analyst",
    location: "Bratislava",
    salary: "2 800 €",
    matchScore: 98,
    matchedSkills: ["Python", "SQL", "Data Visualization", "Excel"],
    missingSkills: ["Advanced PowerBI"],
    aiRecommendation: "Complete this Coursera certification to increase your salary potential by 15%. Your Python and SQL experience aligns perfectly with our Data Team requirements. Kickresume Tip: Improve your CV summary to highlight your leadership experience.",
    description: "Join our data analytics team to help drive data-driven decisions across Tatra Banka. You'll work with large datasets and create insights for business stakeholders.",
  },
  {
    id: "3",
    title: "Private Banker",
    location: "Bratislava",
    salary: "3 200 €",
    matchScore: 45,
    matchedSkills: ["Customer Service", "Financial Products"],
    missingSkills: ["Certified Financial Planner", "Private Banking Experience"],
    aiRecommendation: "Consider obtaining a CFP certification. Your customer service background is valuable, but specialized private banking training would significantly boost your match. Kickresume Tip: Add quantifiable achievements to your CV, such as 'Managed portfolio of 50+ high-net-worth clients' to demonstrate impact.",
    description: "Provide premium banking services to high-net-worth clients. Build long-term relationships and deliver personalized financial solutions.",
  },
  {
    id: "4",
    title: "Trainee - Risk Management",
    location: "Košice",
    salary: "1 800 €",
    matchScore: 65,
    matchedSkills: ["Analytical Skills", "Excel", "Mathematics"],
    missingSkills: ["Risk Modeling", "FRM Certification"],
    aiRecommendation: "Pursue a Financial Risk Manager (FRM) certification. Your analytical foundation is strong, and this credential would open senior roles. Kickresume Tip: Structure your CV to emphasize analytical projects and mathematical coursework to strengthen your risk management profile.",
    description: "Entry-level position in our risk management department. Perfect for recent graduates looking to build a career in financial risk analysis.",
  },
  {
    id: "5",
    title: "Product Account Manager - Small Business",
    location: "Bratislava",
    salary: "2 900 €",
    matchScore: 58,
    matchedSkills: ["Account Management", "Communication"],
    missingSkills: ["Small Business Banking", "Sales Training"],
    aiRecommendation: "Complete our internal Small Business Banking training program. Your account management skills transfer well, and specialized knowledge will increase your effectiveness. Kickresume Tip: Use action verbs like 'Negotiated' and 'Developed' in your CV to showcase your proactive account management approach.",
    description: "Manage relationships with small business clients and help them grow with our tailored banking products and services.",
  },
];

// Original order for reference (before analysis)
export const originalJobOrder = jobs.map(job => job.id);
