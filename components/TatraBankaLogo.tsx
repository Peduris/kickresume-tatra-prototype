"use client";

export default function TatraBankaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-end space-x-1">
        {/* Three vertical bars */}
        <div className="flex items-end space-x-0.5">
          <div className="w-0.5 bg-white" style={{ height: "10px" }} />
          <div className="w-0.5 bg-white" style={{ height: "14px" }} />
          <div className="w-0.5 bg-white" style={{ height: "18px" }} />
        </div>
        
        {/* TB text */}
        <div className="text-white font-bold leading-none ml-1.5">
          <span className="text-base">T</span>
          <span className="text-sm">B</span>
        </div>
      </div>
      
      {/* TATRA BANKA text below */}
      <div className="mt-0.5">
        <span className="text-white text-[10px] font-normal tracking-wide leading-tight">
          TATRA BANKA
        </span>
      </div>
    </div>
  );
}

