
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PCConfigDetailed } from "@/data/types";
import { Link } from "react-router-dom";

interface PreBuiltPCCardProps {
  config: PCConfigDetailed;
}

const PreBuiltPCCard = ({ config }: PreBuiltPCCardProps) => {
  return (
    <Link to={`/prebuilt/${config.id}`} className="block">
      <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
        <CardHeader>
          <div className="grid grid-cols-3 gap-2 aspect-video w-full overflow-hidden rounded-t-lg">
            <div className="relative">
              <img
                src={config.images.cpu}
                alt={`Processeur ${config.name}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white text-xs p-1 text-center">
                Processeur
              </div>
            </div>
            <div className="relative">
              <img
                src={config.images.gpu}
                alt={`Carte graphique ${config.name}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white text-xs p-1 text-center">
                Carte graphique
              </div>
            </div>
            <div className="relative">
              <img
                src={config.images.case}
                alt={`Boitier ${config.name}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white text-xs p-1 text-center">
                Boitier
              </div>
            </div>
          </div>
          <CardTitle className="text-xl text-center mt-4">{config.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <span className="text-3xl font-bold text-forge-orange">{config.price}€</span>
          </div>
          <p className="text-gray-400 text-center">{config.description}</p>
          <div className="flex flex-col gap-2">
            <Button className="w-full bg-forge-orange hover:bg-forge-red transition-colors">
              Voir les composants
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PreBuiltPCCard;
