import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface AssemblyOptionsProps {
  includeAssembly: boolean;
  selectedAssemblyPlan: string;
  setIncludeAssembly: (value: boolean) => void;
  setSelectedAssemblyPlan: (value: string) => void;
}

const AssemblyOptions = ({
  includeAssembly,
  selectedAssemblyPlan,
  setIncludeAssembly,
  setSelectedAssemblyPlan,
}: AssemblyOptionsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="include-assembly"
          checked={includeAssembly}
          onCheckedChange={(checked) => setIncludeAssembly(checked as boolean)}
        />
        <Label htmlFor="include-assembly">Inclure un forfait de montage</Label>
      </div>

      {includeAssembly && (
        <div className="space-y-4 mt-4">
          <Label>Choisissez votre forfait de montage</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              type="button"
              variant={selectedAssemblyPlan === "Basic" ? "default" : "outline"}
              className={`p-4 h-auto ${
                selectedAssemblyPlan === "Basic" ? "bg-forge-orange" : ""
              }`}
              onClick={() => setSelectedAssemblyPlan("Basic")}
            >
              <div className="text-left">
                <div className="font-bold">Basic</div>
                <div className="text-sm text-gray-400">Montage simple</div>
                <div className="mt-2">30€</div>
              </div>
            </Button>

            <Button
              type="button"
              variant={selectedAssemblyPlan === "Standard" ? "default" : "outline"}
              className={`p-4 h-auto ${
                selectedAssemblyPlan === "Standard" ? "bg-forge-orange" : ""
              }`}
              onClick={() => setSelectedAssemblyPlan("Standard")}
            >
              <div className="text-left">
                <div className="font-bold">Standard</div>
                <div className="text-sm text-gray-400">Montage + Installation Windows</div>
                <div className="mt-2">50€</div>
              </div>
            </Button>

            <Button
              type="button"
              variant={selectedAssemblyPlan === "Premium" ? "default" : "outline"}
              className={`p-4 h-auto ${
                selectedAssemblyPlan === "Premium" ? "bg-forge-orange" : ""
              }`}
              onClick={() => setSelectedAssemblyPlan("Premium")}
            >
              <div className="text-left">
                <div className="font-bold">Premium</div>
                <div className="text-sm text-gray-400">Montage + Windows + Optimisation</div>
                <div className="mt-2">70€</div>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssemblyOptions;