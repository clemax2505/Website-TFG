import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PCConfig } from "./types";
import { Link } from "react-router-dom";

interface PreBuiltPCCardProps {
  config: PCConfig;
}

const getImagesForConfig = (configId: string): { cpu: string; gpu: string; case: string } => {
  switch (configId) {
    case "thebeginning":
      return {
        cpu: "/pc-parts/cpu/R5 5600.png",
        gpu: "/pc-parts/gpu/6650XT.png",
        case: "/placeholder.svg"
      };
    case "littleguy":
      return {
        cpu: "/pc-parts/cpu/R5 5600.png",
        gpu: "/pc-parts/gpu/6750XT.png",
        case: "/placeholder.svg"
      };
    case "viper":
      return {
        cpu: "/pc-parts/cpu/R7 5700X.png",
        gpu: "/pc-parts/gpu/4060 EAGLE OC.png",
        case: "/placeholder.svg"
      };
    case "airflowprime":
      return {
        cpu: "/pc-parts/cpu/R7 5800X.png",
        gpu: "/pc-parts/gpu/7700XT GIGABYTE GAMING OC.png",
        case: "/placeholder.svg"
      };
    case "thehellbound":
      return {
        cpu: "/pc-parts/cpu/i5-14600KF.png",
        gpu: "/pc-parts/gpu/7800XT POWERCOLOR HELLBOUND.png",
        case: "/placeholder.svg"
      };
    case "infinity":
      return {
        cpu: "/pc-parts/cpu/i5-14600KF.png",
        gpu: "/pc-parts/gpu/4070 SUPER TWIN EDGE ZOTAC.png",
        case: "/placeholder.svg"
      };
    case "tuffy":
      return {
        cpu: "/pc-parts/cpu/i7-14700KF.png",
        gpu: "/pc-parts/gpu/4070 TI SUPER TUF GAMING OC.png",
        case: "/placeholder.svg"
      };
    case "thetaichi":
      return {
        cpu: "/pc-parts/cpu/R7 7800X3D.png",
        gpu: "/pc-parts/gpu/7900XTX TAICHI.png",
        case: "/placeholder.svg"
      };
    case "chillguy":
      return {
        cpu: "/pc-parts/cpu/i9-14900KF.png",
        gpu: "/pc-parts/gpu/4080 SUPER PNY EPIC-X RGB.png",
        case: "/placeholder.svg"
      };
    case "themaster":
      return {
        cpu: "/pc-parts/cpu/R7 9800X3D.png",
        gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO.png",
        case: "/placeholder.svg"
      };
    case "theoverkill":
      return {
        cpu: "/pc-parts/cpu/R7 9800X3D.png",
        gpu: "/pc-parts/gpu/4080 SUPER MSI GAMING X SLIM.png",
        case: "/placeholder.svg"
      };
    default:
      return {
        cpu: "/placeholder.svg",
        gpu: "/placeholder.svg",
        case: "/placeholder.svg"
      };
  }
};

const PreBuiltPCCard = ({ config }: PreBuiltPCCardProps) => {
  const images = getImagesForConfig(config.id);

  return (
    <Link to={`/prebuilt/${config.id}`} className="block">
      <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
        <CardHeader>
          <div className="grid grid-cols-3 gap-2 aspect-video w-full overflow-hidden rounded-t-lg">
            <div className="relative">
              <img
                src={images.cpu}
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
                src={images.gpu}
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
                src={images.case}
                alt={`Boitier ${config.name}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white text-xs p-1 text-center">
                Carte mère
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
