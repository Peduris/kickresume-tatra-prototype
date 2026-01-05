export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  department?: string;
  publishedDate?: string;
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
    department: "IT & Technológie",
    publishedDate: "15. 12. 2024",
    matchScore: 72,
    matchedSkills: ["Java", "Spring Boot", "SQL", "Agile"],
    missingSkills: ["Kubernetes", "Microservices"],
    aiRecommendation: "Dokonči certifikáciu Kubernetes, aby si zvýšil svoj platový potenciál o 20%. Tvoja skúsenosť s Javou sa dokonale zhoduje s našim backend tímom. Kickresume Tip: V sekcii projektov v životopise zvýrazni svoje projekty so Spring Boot, aby si ukázal svoju odbornosť s frameworkom.",
    description: "Hľadáme skúseného Java vývojára do nášho tímu jadrového bankovného systému. Budeš pracovať na kritických systémoch a spolupracovať s medzifunkčnými tímami.",
  },
  {
    id: "2",
    title: "Dátový Analytik",
    location: "Bratislava",
    salary: "2 800 €",
    department: "Dátová analýza",
    publishedDate: "20. 12. 2024",
    matchScore: 98,
    matchedSkills: ["Python", "SQL", "Vizualizácia dát", "Excel"],
    missingSkills: ["Pokročilý PowerBI"],
    aiRecommendation: "Dokonči túto Coursera certifikáciu, aby si zvýšil svoj platový potenciál o 15%. Tvoja skúsenosť s Pythonom a SQL sa dokonale zhoduje s požiadavkami nášho dátového tímu. Kickresume Tip: Zlepši súhrn v životopise, aby zvýraznil tvoju skúsenosť s vedením.",
    description: "Pridaj sa k nášmu tímu dátovej analýzy a pomôž nám robiť rozhodnutia založené na dátach v celej Tatra Banke. Budeš pracovať s veľkými dátovými súbormi a vytvárať poznatky pre obchodných zúčastnených strán.",
  },
  {
    id: "3",
    title: "Súkromný Bankár",
    location: "Bratislava",
    salary: "3 200 €",
    department: "Súkromné bankovníctvo",
    publishedDate: "10. 12. 2024",
    matchScore: 45,
    matchedSkills: ["Zákaznícky servis", "Finančné produkty"],
    missingSkills: ["Certifikovaný Finančný Poradca", "Skúsenosť so súkromným bankovníctvom"],
    aiRecommendation: "Zváž získanie CFP certifikácie. Tvoje zázemie v zákazníckom servise je cenné, ale špecializovaný tréning súkromného bankovníctva by výrazne zvýšil tvoju zhodu. Kickresume Tip: Pridaj do životopisu merateľné úspechy, napríklad 'Spravoval som portfólio 50+ klientov s vysokým čistým majetkom', aby si ukázal dopad.",
    description: "Poskytuj prémiové bankové služby klientom s vysokým čistým majetkom. Buduj dlhodobé vzťahy a poskytuj personalizované finančné riešenia.",
  },
  {
    id: "4",
    title: "Stážista - Rizikový Manažment",
    location: "Košice",
    salary: "1 800 €",
    department: "Rizikový manažment",
    publishedDate: "5. 12. 2024",
    matchScore: 65,
    matchedSkills: ["Analytické zručnosti", "Excel", "Matematika"],
    missingSkills: ["Modelovanie rizík", "FRM Certifikácia"],
    aiRecommendation: "Získaj certifikáciu Financial Risk Manager (FRM). Tvoja analytická základňa je silná a tento certifikát by otvoril seniorské pozície. Kickresume Tip: Štruktúruj svoj životopis tak, aby zdôraznil analytické projekty a matematické kurzy, aby si posilnil svoj profil v rizikovom manažmente.",
    description: "Vstupná pozícia v našom oddelení rizikového manažmentu. Ideálne pre nedávnych absolventov, ktorí chcú budovať kariéru vo finančnej analýze rizík.",
  },
  {
    id: "5",
    title: "Produktový Account Manager - Malé Podnikanie",
    location: "Bratislava",
    salary: "2 900 €",
    department: "Obchod a rozvoj",
    publishedDate: "18. 12. 2024",
    matchScore: 58,
    matchedSkills: ["Správa účtov", "Komunikácia"],
    missingSkills: ["Bankovníctvo pre malé podnikanie", "Predajný tréning"],
    aiRecommendation: "Dokonči náš interný tréningový program Bankovníctvo pre malé podnikanie. Tvoje zručnosti v správe účtov sa dobre prenášajú a špecializované znalosti zvýšia tvoju efektívnosť. Kickresume Tip: Používaj akčné slovesá ako 'Vyjednával' a 'Vyvinul' v životopise, aby si ukázal svoj proaktívny prístup k správe účtov.",
    description: "Spravuj vzťahy s klientmi malých podnikov a pomôž im rásť s našimi špecializovanými bankovými produktmi a službami.",
  },
];

// Original order for reference (before analysis)
export const originalJobOrder = jobs.map(job => job.id);
