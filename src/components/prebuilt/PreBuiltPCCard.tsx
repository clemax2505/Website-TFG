import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PCConfig } from "./types";
import { Link } from "react-router-dom";

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
        <div className="flex flex-col gap-2">
          <Link to={`/prebuilt/${config.id}`}>
            <Button className="w-full bg-forge-orange hover:bg-forge-red transition-colors">
              Voir les composants
            </Button>
          </Link>
          <a href={config.link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full">
              Voir sur Drop Reference
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreBuiltPCCard;