import { useParams } from "react-router-dom";
import { PCConfig } from "./types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Images placeholder pour chaque configuration
const configImages: { [key: string]: string[] } = {
  "budget": [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  ],
  "mid1": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  ],
  "mid2": [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  ],
  "high1": [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  ],
  "high2": [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  ],
  "extreme1": [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  ],
  "extreme2": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  ],
  "extreme3": [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  ],
  "extreme4": [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  ]
};

const componentsList = [
  "Processeur (CPU)",
  "Carte graphique (GPU)",
  "Carte mère",
  "Mémoire RAM",
  "Stockage SSD",
  "Alimentation",
  "Boîtier",
  "Refroidissement",
  "Ventilateurs"
];

const PCConfigDetails = ({ configId }: { configId: string }) => {
  const images = configImages[configId] || [];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="aspect-video relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Configuration ${configId} - Vue ${index + 1}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Card className="glass-card">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">Composants</h2>
          <ul className="space-y-4">
            {componentsList.map((component, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-forge-orange"></div>
                <span>{component}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <a href={`https://dropreference.com/fr/setups`} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            Voir sur Drop Reference
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PCConfigDetails;