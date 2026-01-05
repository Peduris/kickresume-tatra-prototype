"use client";

export default function TatraBankaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Graphic element with rectangular outline */}
      <div className="border border-white px-2 py-1 flex items-end space-x-2 mb-1">
        {/* Three vertical bars - slightly slanted, increasing height */}
        <div className="flex items-end space-x-1">
          <div 
            className="bg-white" 
            style={{ 
              width: "2px", 
              height: "12px",
              transform: "skewY(-2deg)"
            }} 
          />
          <div 
            className="bg-white" 
            style={{ 
              width: "2px", 
              height: "16px",
              transform: "skewY(-2deg)"
            }} 
          />
          <div 
            className="bg-white" 
            style={{ 
              width: "2px", 
              height: "20px",
              transform: "skewY(-2deg)"
            }} 
          />
        </div>
        
        {/* TB text - bold and italicized */}
        <div className="text-white font-bold italic leading-none">
          <span className="text-lg">T</span>
          <span className="text-base">B</span>
        </div>
      </div>
      
      {/* TATRA BANKA text */}
      <div className="mb-0.5">
        <span className="text-white text-sm font-bold uppercase tracking-wide leading-tight">
          TATRA BANKA
        </span>
      </div>
      
      {/* Tagline */}
      <div>
        <span className="text-white text-[10px] font-normal leading-tight">
          Member of Raiffeisen Bank International
        </span>
      </div>
    </div>
  );
}

