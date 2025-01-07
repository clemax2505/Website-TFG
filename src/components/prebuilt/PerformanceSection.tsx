import { Card } from "@/components/ui/card";
import FPSTable from "./FPSTable";

const PerformanceSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-forge-orange mb-4">Performances en jeu</h3>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Jeu {index + 1}</span>
          </div>
          <div className="flex-grow">
            <FPSTable gameIndex={index} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceSection;