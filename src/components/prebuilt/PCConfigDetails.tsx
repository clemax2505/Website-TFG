import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openEmailClient } from "@/utils/emailUtils";
import PCComponentsList from "./PCComponentsList";
import { priceRanges } from "@/pages/PreBuiltPCs";
import { Card, CardContent } from "@/components/ui/card";

const configComponents: { [key: string]: string[] } = {
  "thebeginning": [
    "AMD Ryzen 5 5600",
    "Stock AMD ventirad",
    "Gigabyte B550 GAMING X V2",
    "16 Go DDR4 3200 MHz Lexar THOR ",
    "WD_black SN770 1 To (NVMe)",
    "RX 6650 XT Speedster",
    "MSI MAG 100R",
    "MSI A650BN",
  ],
    "littleguy": [
    "AMD Ryzen 5 5600",
    "Be Quiet Pure Rock 2",
    "MSI B550-A PRO",
    "16 Go DDR4 3200 MHz Kingston Fury Beast",
    "WD_black SN770 1 To (NVMe)",
    "RX 6750 XT Speedster",
    "MSI MAG 120A Airflow",
    "MSI A650BN",
  ],
  "viper": [
    "AMD Ryzen 7 5700X",
    "MSI 360R V2",
    "ASUS ROG B550-F Gaming WiFi II",
    "16 Go DDR4 3200 MHz Patriot Viper Steel",
    "WD_black SN770 2 To (NVMe)",
    "RTX 4060 EAGLE OC",
    "Corsair 3000D Airflow",
    "ASUS Prime AP-750G",
  ],
  "airflowprime": [
    "AMD Ryzen 7 5800X",
    "MSI 360R V2",
    "ASUS ROG B550-F Gaming WiFi II",
    "32 Go DDR4 3600 MHz Lexar Ares RGB",
    "WD_black SN770 2 To (NVMe)",
    "RX 7700 XT Gigabyte Gaming OC",
    "Corsair 4000D Airflow",
    "ASUS Prime AP-750G",
  ],
  "thehellbound": [
    "Intel Core i5-14600KF",
    "arctic liquid freezer III Whtie",
    "ASUS Prime Z790-P WiFi",
    "32 Go DDR5 6000 MHz G.Skill Ripjaws M5 RGB",
    "WD_black SN770 2 To (NVMe)",
    "RX 7800 XT PowerColor HellBound Spectral",
    "Corsair 3000D RGB Airflow White",
    "ASUS Prime AP-750G",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  "infinity": [
    "Intel Core i5-14600KF",
    "MSI 360R V2",
    "MSI MPG Z790 Edge TI Max WiFi",
    "32 Go DDR5 6000 MHz Lexar THOR RGB",
    "WD_black SN770 2 To (NVMe)",
    "RTX 4070 super Zotac Twin Edge",
    "Lian Li O11 Dynamic Mini",
    "Corsair SF1000",
    "Configurations ventilée uniquement avec des SL Infinity",
  ],
  "tuffy": [
    "Intel Core i7-14700KF",
    "ASUS TUF LC II 360 ARGB",
    "Gigabyte Z790 AORUS Pro X WiFi 7",
    "32 Go DDR5 6000 MHz Lexar THOR RGB",
    "WD_black SN770 2 To (NVMe)",
    "RTX 4070 Ti super TUF GAMING OC",
    "Corsair 3000D Airflow",
    "ASUS TUF Gaming 1000G",
    "Configurations ventilée uniquement avec des TF120",
  ],
  "thetaichi": [
    "AMD Ryzen 7 7800X3D",
    "ARCTIC Liquid Freezer III 360 (avec AF120)",
    "MSI X670E GAMING PLUS WIFI",
    "32 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "KingStone KC3000 2 To (NVMe)",
    "RX 7900 XTX ASRock Taichi white",
    "Corsair 5000D RGB Airflow",
    "Corsair RM1000X",
    "Configurations ventilée uniquement avec des AF120",
  ],
  "chillguy": [
    "Intel Core i9-14900KF",
    "Corsair iCUE Link TITAN 360 RGB",
    "Gigabyte Z790 AORUS Master X",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "KingStone KC3000 2 To (NVMe)",
    "RTX 4080 Super PNY Epic-X-RGB",
    "Antec C8",
    "Corsair RM1000X",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  "themaster": [
    "AMD Ryzen 7 9800X3D",
    "ARCTIC Liquid Freezer III 360 (avec RX120)",
    "Gigabyte X870E AORUS MASTER",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Kingston KC3000 2 To (NVMe)",
    "RX 7900 XTX Sapphire NITRO+",
    "Corsair iCUE LINK 6500X RGB",
    "Corsair RM1200x SHIFT",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  "theoverkill": [
    "AMD Ryzen 7 9800X3D",
    "Corsair iCUE LINK TITAN 360 RX LCD",
    "ASUS ROG Crosshair X870E Hero",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Samsung 990 Pro 4 To (NVMe)",
    "RTX 4080 Super MSI Gaming X Slim",
    "Corsair 5000T RGB",
    "Be Quiet! Straight Power 12 1200W",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ]
};

const getImagesForConfig = (configId: string): { cpu: string; gpu: string } => {
  switch (configId) {
    case "thebeginning":
      return {
        cpu: "/R5 5600.png",
        gpu: "/6650XT.png"
      };
    case "littleguy":
      return {
        cpu: "/R5 5600.png",
        gpu: "/6750XT.png"
      };
    case "viper":
      return {
        cpu: "/R5 5600.png",
        gpu: "/4060 EAGLE 3X.png"
      };
    case "airflowprime":
      return {
        cpu: "/R7 5800X.png",
        gpu: "/7700XT GIGABYTE GAMING OC.png"
      };
    case "thehellbound":
      return {
        cpu: "/i5-14600KF.png",
        gpu: "/7800XT POWERCOLOR HELLBOUND.png"
      };
    case "infinity":
      return {
        cpu: "/i5-14600KF.png",
        gpu: "/4070 SUPER TWIN EDGE ZOTAC.png"
      };
    case "tuffy":
      return {
        cpu: "/i7-14700KF.png",
        gpu: "/4070 Ti SUPER PNY EPIC-X RGB.png"
      };
    case "thetaichi":
      return {
        cpu: "/R7 7800X3D.png",
        gpu: "/7900XTX TAICHI.png"
      };
    case "chillguy":
      return {
        cpu: "/i9-14900KF.png",
        gpu: "/4080 SUPER PNY EPIC-X RGB.png"
      };
    case "themaster":
      return {
        cpu: "/R7 9800X3D.png",
        gpu: "/7900XTX TAICHI.png"
      };
    case "theoverkill":
      return {
        cpu: "/R7 9800X3D.png",
        gpu: "/4080 SUPER MSI GAMING X SLIM.png"
      };
    default:
      return {
        cpu: "/placeholder.svg",
        gpu: "/placeholder.svg"
      };
  }
};

const PCConfigDetails = () => {
  const { configId } = useParams();
  const components = configComponents[configId || ""] || [];
  const images = getImagesForConfig(configId || "");
  const selectedConfig = priceRanges.find(config => config.id === configId);

  const handleEmailRequest = () => {
    const emailBody = `
Nouvelle demande de configuration PC

Configuration demandée : ${selectedConfig?.name || configId}
Prix : ${selectedConfig?.price}€

Liste des composants :
${components.join('\n')}
    `;

    openEmailClient("Nouvelle demande de configuration PC", emailBody);
  };

  if (!selectedConfig) {
    return <div>Configuration non trouvée</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-forge-orange">{selectedConfig.name}</h2>
        <p className="text-2xl font-semibold">{selectedConfig.price}€</p>
      </div>

      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <img
                src={images.cpu}
                alt="CPU"
                className="w-full h-48 object-contain"
              />
              <p className="text-center text-sm">Processeur</p>
            </div>
            <div className="space-y-2">
              <img
                src={images.gpu}
                alt="GPU"
                className="w-full h-48 object-contain"
              />
              <p className="text-center text-sm">Carte graphique</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <PCComponentsList components={components} />
      
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          size="lg"
          onClick={handleEmailRequest}
        >
          Passer commande
        </Button>
      </div>
    </div>
  );
};

export default PCConfigDetails;
