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
      <div className="flex items-start space-x-2">
        <Checkbox
          id="include-assembly"
          checked={includeAssembly}
          onCheckedChange={(checked) => setIncludeAssembly(checked as boolean)}
          className="mt-1"
        />
        <Label htmlFor="include-assembly" className="leading-tight">Inclure un forfait de montage</Label>
      </div>

      {includeAssembly && (
        <div className="space-y-4 mt-4">
          <Label>Choisissez votre forfait de montage</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              type="button"
              variant={selectedAssemblyPlan === "Basic" ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-start w-full ${
                selectedAssemblyPlan === "Basic" ? "bg-forge-orange" : ""
              }`}
              onClick={() => setSelectedAssemblyPlan("Basic")}
            >
              <div className="text-left w-full">
                <div className="font-bold">Basic</div>
                <div className="text-sm text-gray-400">
                  <ul>
                  <li>Montage PC</li>
                  <li>Cable management</li>
                  <li>Mise à jour du bios + XMP</li>
                  </ul>
                </div>
                <div className="mt-2">35€</div>
              </div>
            </Button>

            <Button
              type="button"
              variant={selectedAssemblyPlan === "Standard" ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-start w-full ${
                selectedAssemblyPlan === "Standard" ? "bg-forge-orange" : ""
              }`}
              onClick={() => setSelectedAssemblyPlan("Standard")}
            >
              <div className="text-left w-full">
                <div className="font-bold">Standard</div>
                <div className="text-sm text-gray-400">
                  <ul>
                  <li>Montage PC</li>
                  <li>Cable management</li>
                  <li>Mise à jour du bios + XMP</li>
                  <li>Installation de windows (sans activation)</li>
                  <li>Installation des drivers</li>
                  </ul>
                </div>
                <div className="mt-2">45€</div>
              </div>
            </Button>

            <Button
              type="button"
              variant={selectedAssemblyPlan === "Premium" ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-start w-full ${
                selectedAssemblyPlan === "Premium" ? "bg-forge-orange" : ""
              }`}
              onClick={() => setSelectedAssemblyPlan("Premium")}
            >
              <div className="text-left w-full">
                <div className="font-bold">Premium</div>
                <div className="text-sm text-gray-400">
                  <ul>
                  <li>Montage PC</li>
                  <li>Cable management</li>
                  <li>Mise à jour du bios + XMP</li>
                  <li>Installation de windows (avec activation)</li>
                  <li>Installation des drivers</li>
                  <li>Installation des logiciels de gestion </li>
                  </ul>
                </div>
                <div className="mt-2">75€</div>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssemblyOptions;
