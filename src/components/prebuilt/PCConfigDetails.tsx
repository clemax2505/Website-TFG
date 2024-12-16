import { useParams } from "react-router-dom";
import { PCConfig } from "./types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openEmailClient } from "@/utils/emailUtils";

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

const configComponents: { [key: string]: string[] } = {
  "budget": [
    "AMD Ryzen 5 5600x",
    "Bequiet pure Rock 2",
    "MSI B550-A PRO",
    "16 Go 3200 MHz DDR4 Fury Beast",
    "Crucial P3 1 To (NVMe)",
    "RX 6750 xt Speedster",
    "MSI mag 120A Airflow",
    "MSI A650bn",
  ],
  "mid1": [
    "AMD Ryzen 5 5600x",
    "MSI 360R V2",
    "Asus ROG B550-F gaming WIFI II",
    "16 Go 3200MHz DDR4 Patriot Viper Steel",
    "Crucial P3 2 To (NVMe)",
    "RTX 4060 Eagle 3x",
    "Corsair 3000D Airflow",
    "Asus Prime AP-750G",
  ],
  "mid2": [
    "AMD Ryzen 7 5800x",
    "MSI 360R V2",
    "Asus ROG B550-F Gaming WIFI II",
    "32 Go DDR4 3600MHz Corsair Vengeance RGB Pro",
    "Crucial P3 2 To (NVMe)",
    "RX 7700 xt Gigabyte GAMING OC",
    "Corsair 4000D Airflow",
    "Asus Prime AP-750G",
  ],
  "high1": [
    "INTEL I5 14600KF",
    "Corsair H150I Elite Capellix XT White",
    "Asus Prime Z790-P WIFI",
    "32 Go DDR5 6000MHz Crucial Pro White",
    "Crucial P3 2 To (NVMe)",
    "RX 7800 XT PowerColor HellBound Spectral",
    "Corsair 3000D RGB AirFlow White",
    "Asus Prime AP-750G", 
  ],
  "high2": [
    "INTEL I5 14600KF",
    "MSI 360R V2",
    "Z790 edge max WIFI",
    "32 Go DDR5 6000MHz Corsair Vengeance RGB",
    "Crucial P3 2 To (NVMe)",
    "4070 super Twin Edge Zotac",
    "Lian Li O11 Dynamique Mini",
    "Corsair RM1000X",
  ],
  "extreme1": [
    "INTEL I7-14700KF",
    "Asus TUF LC II 360 ARGB",
    "Z790 Aorus Pro X WIFI7",
    "32 Go DDR4 6000MHz Corsair Vengeance RGB",
    "Crucial P3 2 To (NVMe)",
    "4070 ti super PNY Epic-X-RGB",
    "Corsair 3000D RGB AirFlow",
    "Asus TUF Gaming 1000G",
  ],
  "extreme2": [
    "AMD Ryzen 7 7800X3D",
    "Asus ROG LC III 360 ARGB",
    "MSI X670E Gaming Plus WIFI",
    "32 Go DDR5 6000MHz G.Skill Trident Z5 Neo RGB",
    "Crucial P3 2 To + P3 1 To (NVMe)",
    "RX 7900 xtx AsRock Phantom Gaming OC",
    "Corsair 5000D RGB AirFlow",
    "Corsair RM1000X",
  ],
  "extreme3": [
    "Intel I9 14900KF",
    "Corsair ICUE Link TITAN 360 RX RGB",
    "Z790 Aorus Master X",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Crucial P3 2To + P3 1 To (NVMe)",
    "RTX 4080 super PNY Epic-X-RGB",
    "Antec C8",
    "Corsair RM1000X",
  ],
  "extreme4": [
    "AMD Ryzen 7 9800X3D",
    "Corsair ICUE Link TITAN 360",
    "Asus ROG CROSSHAIR X670E HERO",
    "64 Go DDR5 6000MHz G.Skill Trident Z5 Neo RGB",
    "Samsung 990 Pro 4 To (NVMe)",
    "RTX 4080 super MSI Gaming X Slim",
    "Corsair 5000T RGB",
    "Be quiet! Straight Power 12 1200W",
  ]
};

const PCConfigDetails = ({ configId }: { configId: string }) => {
  const images = configImages[configId] || [];
  const components = configComponents[configId] || [];

  const handleEmailRequest = () => {
    const emailBody = `
Nouvelle demande de configuration PC

Configuration demandée: ${configId}

Liste des composants:
${components.join('\n')}
    `;

    openEmailClient("Nouvelle demande de configuration PC", emailBody);
  };

  return (
    <div className="space-y-8">
      {/* Images section hidden for now
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
      */}

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
        <Button 
          variant="outline" 
          size="lg"
          onClick={handleEmailRequest}
        >
          Demander un devis
        </Button>
      </div>
    </div>
  );
};

export default PCConfigDetails;
