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

// Liste des composants spécifiques à chaque configuration
const configComponents: { [key: string]: string[] } = {
  "budget": [
    "Processeur Intel Core i3-12100F",
    "Carte graphique RX 6600",
    "Carte mère B660M",
    "16 Go RAM DDR4",
    "SSD NVMe 500 Go",
    "Alimentation 550W 80+ Bronze",
    "Boîtier ATX Compact",
    "Ventirad Stock",
    "2x Ventilateurs 120mm"
  ],
  "mid1": [
    "Processeur Intel Core i5-12400F",
    "Carte graphique RX 6650 XT",
    "Carte mère B660M",
    "16 Go RAM DDR4",
    "SSD NVMe 1 To",
    "Alimentation 650W 80+ Bronze",
    "Boîtier ATX Mesh",
    "Ventirad Tower",
    "3x Ventilateurs 120mm"
  ],
  "mid2": [
    "Processeur Intel Core i5-13400F",
    "Carte graphique RTX 4060",
    "Carte mère B760M",
    "32 Go RAM DDR4",
    "SSD NVMe 1 To",
    "Alimentation 750W 80+ Gold",
    "Boîtier ATX Premium",
    "Ventirad Double Tower",
    "4x Ventilateurs RGB"
  ],
  "high1": [
    "Processeur Intel Core i5-13600KF",
    "Carte graphique RTX 4070",
    "Carte mère Z790",
    "32 Go RAM DDR5",
    "SSD NVMe 2 To",
    "Alimentation 850W 80+ Gold",
    "Boîtier ATX Premium",
    "AIO 240mm",
    "6x Ventilateurs RGB"
  ],
  "high2": [
    "Processeur Intel Core i7-13700KF",
    "Carte graphique RTX 4070 Ti",
    "Carte mère Z790",
    "32 Go RAM DDR5",
    "SSD NVMe 2 To",
    "Alimentation 1000W 80+ Gold",
    "Boîtier ATX Premium",
    "AIO 360mm",
    "6x Ventilateurs RGB"
  ],
  "extreme1": [
    "Processeur Intel Core i7-13700KF",
    "Carte graphique RTX 4080",
    "Carte mère Z790",
    "64 Go RAM DDR5",
    "SSD NVMe 2 To",
    "Alimentation 1000W 80+ Platinum",
    "Boîtier ATX Premium",
    "AIO 360mm",
    "10x Ventilateurs RGB"
  ],
  "extreme2": [
    "Processeur Intel Core i9-13900KF",
    "Carte graphique RTX 4080",
    "Carte mère Z790",
    "64 Go RAM DDR5",
    "SSD NVMe 4 To",
    "Alimentation 1200W 80+ Platinum",
    "Boîtier ATX Premium",
    "AIO 420mm",
    "10x Ventilateurs RGB"
  ],
  "extreme3": [
    "Processeur Intel Core i9-13900KS",
    "Carte graphique RTX 4090",
    "Carte mère Z790",
    "64 Go RAM DDR5",
    "SSD NVMe 4 To",
    "Alimentation 1600W 80+ Titanium",
    "Boîtier ATX Premium",
    "AIO 420mm",
    "12x Ventilateurs RGB"
  ],
  "extreme4": [
    "Processeur Intel Core i9-13900KS",
    "2x Carte graphique RTX 4090",
    "Carte mère Z790",
    "128 Go RAM DDR5",
    "SSD NVMe 8 To",
    "Alimentation 1600W 80+ Titanium",
    "Boîtier ATX Premium",
    "Custom Watercooling",
    "12x Ventilateurs RGB"
  ]
};

const PCConfigDetails = ({ configId }: { configId: string }) => {
  const images = configImages[configId] || [];
  const components = configComponents[configId] || [];

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
            {components.map((component, index) => (
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
