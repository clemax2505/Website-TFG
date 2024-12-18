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
        cpu: "photo-1518770660439-4636190af475", // Ryzen 5 5600
        gpu: "photo-1486312338219-ce68d2c6f44d"  // RX 6750 XT
      };
    case "mid1":
      return {
        cpu: "photo-1518770660439-4636190af475", // Ryzen 5 5600
        gpu: "photo-1531297484001-80022131f5a1"  // RTX 4060
      };
    case "mid2":
      return {
        cpu: "photo-1518770660439-4636190af475", // Ryzen 7 5800X
        gpu: "photo-1487058792275-0ad4aaf24ca7"  // RX 7700 XT
      };
    case "high1":
      return {
        cpu: "photo-1498050108023-c5249f4df085", // Intel i5-14600KF
        gpu: "photo-1487058792275-0ad4aaf24ca7"  // RX 7800 XT
      };
    case "high2":
      return {
        cpu: "photo-1498050108023-c5249f4df085", // Intel i5-14600KF
        gpu: "photo-1483058712412-4245e9b90334"  // RTX 4070 Super
      };
    case "extreme1":
      return {
        cpu: "photo-1498050108023-c5249f4df085", // Intel i7-14700KF
        gpu: "photo-1483058712412-4245e9b90334"  // RTX 4070 Ti Super
      };
    case "extreme2":
      return {
        cpu: "photo-1518770660439-4636190af475", // Ryzen 7 7800X3D
        gpu: "photo-1487058792275-0ad4aaf24ca7"  // RX 7900 XTX
      };
    case "extreme3":
      return {
        cpu: "photo-1498050108023-c5249f4df085", // Intel i9-14900KF
        gpu: "photo-1483058712412-4245e9b90334"  // RTX 4080 Super
      };
    case "extreme4":
      return {
        cpu: "photo-1518770660439-4636190af475", // Ryzen 7 9800X3D
        gpu: "photo-1483058712412-4245e9b90334"  // RTX 4080 Super
      };
    default:
      return {
        cpu: "photo-1518770660439-4636190af475",
        gpu: "photo-1486312338219-ce68d2c6f44d"
      };
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