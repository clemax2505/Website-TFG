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
        cpu: "photo-1518770660439-4636190af475",
        gpu: "/lovable-uploads/dd23d3d9-737b-424f-8d90-fb81c41d4af9.png"  // RTX 4060
      };
    case "mid1":
      return {
        cpu: "photo-1518770660439-4636190af475",
        gpu: "/lovable-uploads/dd23d3d9-737b-424f-8d90-fb81c41d4af9.png"  // RTX 4060
      };
    case "mid2":
      return {
        cpu: "photo-1518770660439-4636190af475",
        gpu: "/lovable-uploads/34b124cd-c1b0-4293-b698-4579f8eaaa1b.png"  // RTX 4070 Super
      };
    case "high1":
      return {
        cpu: "photo-1498050108023-c5249f4df085",
        gpu: "/lovable-uploads/34b124cd-c1b0-4293-b698-4579f8eaaa1b.png"  // RTX 4070 Super
      };
    case "high2":
      return {
        cpu: "photo-1498050108023-c5249f4df085",
        gpu: "/lovable-uploads/34b124cd-c1b0-4293-b698-4579f8eaaa1b.png"  // RTX 4070 Super
      };
    case "extreme1":
      return {
        cpu: "photo-1498050108023-c5249f4df085",
        gpu: "/lovable-uploads/cc6c31e8-aa18-4dfd-a91a-f0a13da8ff0c.png"  // RTX 4080 Super
      };
    case "extreme2":
      return {
        cpu: "photo-1518770660439-4636190af475",
        gpu: "/lovable-uploads/98ea2b52-1096-4f83-91f7-193f1dccc784.png"  // RTX 4080 Super PNY
      };
    case "extreme3":
      return {
        cpu: "photo-1498050108023-c5249f4df085",
        gpu: "/lovable-uploads/014377b2-46c5-4ceb-92ce-8b2fbb8dd10b.png"  // RTX 4080 Super MSI
      };
    case "extreme4":
      return {
        cpu: "photo-1518770660439-4636190af475",
        gpu: "/lovable-uploads/014377b2-46c5-4ceb-92ce-8b2fbb8dd10b.png"  // RTX 4080 Super MSI
      };
    default:
      return {
        cpu: "photo-1518770660439-4636190af475",
        gpu: "/lovable-uploads/dd23d3d9-737b-424f-8d90-fb81c41d4af9.png"
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