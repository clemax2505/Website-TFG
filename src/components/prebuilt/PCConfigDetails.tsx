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
    "RX 6750 xt",
    "MSI B550-A PRO",
    "16 Go 3200 MHz DDR4 Furry Beast",
    "Crucial P3 1 To (NVMe)",
    "MSI A650bn",
    "MSI mag 120A Airflow",
    "Bequiet pure Rock 2",
  ],
  "mid1": [
    "AMD Ryzen 5 5600x",
    "RTX 4060 Eagle 3x",
    "Asus ROG B550-F gaming WIFI II",
    "16 Go 3200MHz DDR4 Patriot Viper",
    "Crucial P3 2 To (NVMe)",
    "Asus Prime 750W",
    "Corsair 3000D Airflow",
    "MSI 360R V2",
  ],
  "mid2": [
    "AMD Ryzen 7 5800x",
    "RX 7700 xt",
    "Asus ROG B550-F Gaming WIFI II",
    "32 Go DDR4 3600MHz Corsair Vengeance",
    "Crucial P3 2 To (NVMe)",
    "Asus Prime 750W",
    "Corsair 4000D Airflow",
    "MSI 360R V2",
  ],
  "high1": [
    "INTEL I5 14600KF",
    "RTX 4060 ti Asus Dual Wite",
    "Asus Prime Z790-P WIFI",
    "32 Go DDR5 6000MHz Crucial White",
    "Crucial P3 2 To (NVMe)",
    "Asus Prime 750W",
    "Corsair 3000D White",
    "Corsair H150I Elite Capellix XT White",
  ],
  "high2": [
    "INTEL I5 14600KF",
    "4070 super twin edge Zotac",
    "Z790 edge max WIFI",
    "32 Go DDR5 6000MHz Corsair Vengeance",
    "Crucial P3 2 To (NVMe)",
    "Corsair RM1000e",
    "Lian Li o11 dynamique mini",
    "MSI 360R V2",
  ],
  "extreme1": [
    "INTEL I7-14700KF",
    "4070 ti super PNY Epic-X-RGB",
    "Z790 Aorus Pro X WIFI7",
    "32 Go DDR4 6000MHz Corsair Vengeance",
    "Crucial P3 2 To (NVMe)",
    "Asus TUF 1000W",
    "Corsair 3000D",
    "Asus TUF LC II 360 ARGB",
  ],
  "extreme2": [
    "AMD Ryzen 7 7800X3D",
    "RX 7900 xt AsRock Phantom",
    "X670E Gaming Plus WIFI",
    "32 Go DDR5 6000MHz Furry Beast",
    "Crucial P3 2 To + P3 1 To (NVMe)",
    "Corsair RM1000X",
    "Corsair 7000D",
    "Asus ROG LC III 360 ARGB",
  ],
  "extreme3": [
    "Intel I9 14900KF",
    "RTX 4080 super PNY Epic-X-RGB",
    "Z790 Aorus Master",
    "64 Go DDR5 6000 MHz Furry Beast",
    "Crucial P3 2To + P3 1 To (NVMe)",
    "Corsair RM1000X",
    "Antec C5",
    "Corsair ICUE Link TITAN 360",
  ],
  "extreme4": [
    "Intel Core Ultra 9 285K",
    "RTX 4080 super MSI Gaming X Slim",
    "Asus ROG Z890-E Gaming WIFI",
    "64 Go DDR5 6000MHz Furry Beast",
    "Crucial P3 2To + P3 2 To (NVMe)",
    "Bequiet Straight Power 1200W",
    "Corsair 5000T",
    "Corsair ICUE Link TITAN 360",
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
