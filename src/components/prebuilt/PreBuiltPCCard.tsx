import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PCConfig } from "./types";
import { Link } from "react-router-dom";

interface PreBuiltPCCardProps {
  config: PCConfig;
}

const getImagesForConfig = (configId: string): { cpu: string; gpu: string } => {
  switch (configId) {
    case "budget":
      return {
        cpu: "../pc-parts/R5 5600.png", 
        gpu: "/components/prebuilt/pc-parts/6750XT.png"  
      };
    case "mid1":
      return {
        cpu: "/components/prebuilt/pc-parts/R5 5600.png", 
        gpu: "/components/prebuilt/pc-parts/4060 EAGLE 3X.png"  
      };
    case "mid2":
      return {
        cpu: "@/components/prebuilt/pc-parts/R7 5800X.png", 
        gpu: "@/components/prebuilt/pc-parts/7700XT GIGABYTE GAMING OC.png"  
      };
    case "high1":
      return {
        cpu: "@/components/prebuilt/pc-parts/i5-14600KF.png", 
        gpu: "@/components/prebuilt/pc-parts/7800XT POWERCOLOR HELLBOUND.png"  
      };
    case "high2":
      return {
        cpu: "@/components/prebuilt/pc-parts/i5-14600KF.png", 
        gpu: "@/components/prebuilt/pc-parts/4070 SUPER TWIN EDGE ZOTAC.png"  
      };
    case "extreme1":
      return {
        cpu: "@/components/prebuilt/pc-parts/i7-14700KF.png", 
        gpu: "@/components/prebuilt/pc-parts/4070 Ti SUPER PNY EPIC-X RGB.png"  
      };
    case "extreme2":
      return {
        cpu: "@/components/prebuilt/pc-parts/R7 7800X3D.png", 
        gpu: "@/components/prebuilt/pc-parts/7900XTX TAICHI.png"  
      };
    case "extreme3":
      return {
        cpu: "@/components/prebuilt/pc-parts/i9-14900KF.png", 
        gpu: "@/components/prebuilt/pc-parts/4080 SUPER PNY EPIC-X RGB.png"  
      };
      case "extreme4":
      return {
        cpu: "@/components/prebuilt/pc-parts/R7 9800X3D.png",
        gpu: "@/components/prebuilt/pc-parts/7900XTX TAICHI.png"  
      };
    case "extreme5":
      return {
        cpu: "@/components/prebuilt/pc-parts/R7 9800X3D.png",
        gpu: "@/components/prebuilt/pc-parts/4080 SUPER MSI GAMING X SLIM.png"
      };
   /*default:
      return {
        cpu: "photo-1518770660439-4636190af475",
        gpu: "photo-1486312338219-ce68d2c6f44d"
      };*/
  }
};

const PreBuiltPCCard = ({ config }: PreBuiltPCCardProps) => {
  const images = getImagesForConfig(config.id);

  return (
    <Link to={`/prebuilt/${config.id}`} className="block">
      <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
        <CardHeader>
          <div className="grid grid-cols-2 gap-2 aspect-video w-full overflow-hidden rounded-t-lg">
            <div className="relative">
              <img
                src={`https://images.unsplash.com/${images.cpu}`}
                alt={`Processeur ${config.name}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                Processeur
              </div>
            </div>
            <div className="relative">
              <img
                src={`https://images.unsplash.com/${images.gpu}`}
                alt={`Carte graphique ${config.name}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                Carte graphique
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
