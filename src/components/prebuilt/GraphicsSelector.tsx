import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface GraphicsSelectorProps {
  selectedGraphics: "moyen" | "ultra";
  onGraphicsChange: (graphics: "moyen" | "ultra") => void;
}

const GraphicsSelector = ({ selectedGraphics, onGraphicsChange }: GraphicsSelectorProps) => {
  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">Paramètres graphiques</h3>
          
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={selectedGraphics === "moyen" ? "default" : "outline"}
              onClick={() => onGraphicsChange("moyen")}
              className="w-full"
            >
              Medium
            </Button>
            <Button
              variant={selectedGraphics === "ultra" ? "default" : "outline"}
              onClick={() => onGraphicsChange("ultra")}
              className="w-full"
            >
              Ultra
            </Button>
          </div>
          
          <div className="text-xs text-gray-400 text-center">
            {selectedGraphics === "moyen" 
              ? "Paramètres équilibrés pour de bonnes performances"
              : "Paramètres maximaux pour la meilleure qualité visuelle"
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GraphicsSelector;