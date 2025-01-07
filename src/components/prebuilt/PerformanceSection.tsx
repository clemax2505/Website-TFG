import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FPSTable from "./FPSTable";
import { useState } from "react";

const PerformanceSection = () => {
  const [selectedResolution, setSelectedResolution] = useState<'FHD' | '2K' | '4K'>('FHD');

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-forge-orange mb-4">Performances en jeu</h3>
      
      <div className="flex gap-2 mb-6">
        <Button 
          variant={selectedResolution === 'FHD' ? "default" : "outline"}
          onClick={() => setSelectedResolution('FHD')}
          className="flex-1"
        >
          FHD (1080p)
        </Button>
        <Button 
          variant={selectedResolution === '2K' ? "default" : "outline"}
          onClick={() => setSelectedResolution('2K')}
          className="flex-1"
        >
          2K (1440p)
        </Button>
        <Button 
          variant={selectedResolution === '4K' ? "default" : "outline"}
          onClick={() => setSelectedResolution('4K')}
          className="flex-1"
        >
          4K (2160p)
        </Button>
      </div>

      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Jeu {index + 1}</span>
          </div>
          <div className="flex-grow">
            <FPSTable gameIndex={index} resolution={selectedResolution} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceSection;