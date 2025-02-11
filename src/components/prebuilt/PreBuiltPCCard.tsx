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
        case: "/pc-parts/case/tecware forge M2.png"
      };
    case "littleguy":
      return {
        cpu: "/pc-parts/cpu/R5 7500F.png",
        gpu: "/pc-parts/gpu/6650XT.png",
        case: "/pc-parts/case/msi mag forge 100m noir.png"
      };
    case "cheapy":
      return {
        cpu: "/pc-parts/cpu/R5 7600X.png",
        gpu: "/pc-parts/gpu/6750XT.png",
        case: "/pc-parts/case/3000D noir.png"
      };
    case "viper":
      return {
        cpu: "/pc-parts/cpu/R5 7500F.png",
        gpu: "/pc-parts/gpu/6750 XT.png",
        case: "/pc-parts/case/msi mag forge 112r noir.png"
      };
    case "pulsar":
      return {
        cpu: "/pc-parts/cpu/R5 7600X.png",
        gpu: "/pc-parts/gpu/7800XT PULSE.png",
        case: "/pc-parts/case/phanteks xt pro ultra noir.png"
      };
    case "phantomatic":
      return {
        cpu: "/pc-parts/cpu/R7 7700X.png",
        gpu: "/pc-parts/gpu/7800XT ASRock Phantom Gaming OC.png",
        case: "/pc-parts/case/msi mag forge 100r noir.png"
      };
    case "arcticold":
      return {
        cpu: "/pc-parts/cpu/R7 7700X.png",
        gpu: "/pc-parts/gpu/7900 GRE.png",
        case: "/pc-parts/case/6500X rgb noir.png"
      };
    case "infinity":
      return {
        cpu: "/pc-parts/cpu/R7 9700X.png",
        gpu: "/pc-parts/gpu/7900XTX.png",
        case: "/pc-parts/case/O11 dynamic mini.png"
      };
    case "thehellhound":
      return {
        cpu: "/pc-parts/cpu/R7 9700X.png",
        gpu: "/pc-parts/gpu/7900XT POWERCOLOR HELLBOUND.png",
        case: "/pc-parts/case/4000D white.png"
      };
    case "nitrous":
      return {
        cpu: "/pc-parts/cpu/R7 9800X3D.png",
        gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO.png",
        case: "/pc-parts/case/phanteks xt pro ultra noir.png"
      };
    case "tuffy":
      return {
        cpu: "/pc-parts/cpu/R7 9800X3D.png",
        gpu: "/pc-parts/gpu/4070 TI SUPER TUF GAMING OC.png",
        case: "/pc-parts/case/tuf gt502 plus noir.png"
      };
    case "chillguy":
      return {
        cpu: "/pc-parts/cpu/R7 9800X3D.png",
        gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO.png",
        case: "/pc-parts/case/antec c8.png"
      };
    case "neonotte":
      return {
        cpu: "/pc-parts/cpu/R7 9800X3D.png",
        gpu: "/pc-parts/gpu/4080 SUPER PALIT GamingPro.png",
        case: "/pc-parts/case/view 270 plus tg argb noir.png"
      };
    case "themaster":
      return {
        cpu: "/pc-parts/cpu/R7 9800X3D.png",
        gpu: "/pc-parts/gpu/4080 SUPER PNY XLR8 Gaming VERTO EPIC-X RGB.png",
        case: "/pc-parts/case/hyte y70 noir.png"
      };
    case "theoverkill":
      return {
        cpu: "/pc-parts/cpu/R9 9950X.png",
        gpu: "/pc-parts/gpu/4090 ROH STRIX GAMING OC.png",
        case: "/pc-parts/case/7000x rgb.png"
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
