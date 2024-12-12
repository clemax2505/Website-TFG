import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PCConfig } from "./types";

interface PreBuiltPCCardProps {
  config: PCConfig;
}

const PreBuiltPCCard = ({ config }: PreBuiltPCCardProps) => {
  return (
    <Card className="glass-card hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-center">{config.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <span className="text-3xl font-bold text-forge-orange">{config.price}€</span>
        </div>
        <p className="text-gray-400 text-center">{config.description}</p>
        <div className="flex justify-center">
          <a href={config.link} target="_blank" rel="noopener noreferrer">
            <Button className="bg-forge-orange hover:bg-forge-red transition-colors">
              Voir la configuration
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreBuiltPCCard;