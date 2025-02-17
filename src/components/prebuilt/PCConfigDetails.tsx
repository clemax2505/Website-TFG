import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PCComponentsList from "./PCComponentsList";
import { Card, CardContent } from "@/components/ui/card";
import GamePerformance from "./GamePerformance";
import ResolutionSelector from "./ResolutionSelector";
import { prebuiltConfigs } from "@/data/prebuiltConfigs";
import { useToast } from "@/components/ui/use-toast";

const stripeLinks: { [key: string]: string } = {
  thebeginning: "https://buy.stripe.com/3cs02RcxD1Zp8EM9AC",
  littleguy: "https://buy.stripe.com/3cs4j7btzdI77AIfZ1",
  cheapy: "https://buy.stripe.com/28ocPD1SZ5bBbQY9AN",
  viper: "https://buy.stripe.com/5kAcPD2X347x5sA28c",
  pulsar: "https://buy.stripe.com/aEUdTHapveMb7AI28m",
  phantomatic: "https://buy.stripe.com/8wMeXLbtzfQf08g14j",
  arcticold: "https://buy.stripe.com/eVa6rf69f5bB4ow5kA",
  infinity: "https://buy.stripe.com/4gw5nb9lr1Zp8EMbIP",
  thehellhound: "https://buy.stripe.com/4gwaHv7djbzZ5sAaEK",
  nitrous: "https://buy.stripe.com/5kAcPD8hn9rRaMUfZf",
  tuffy: "https://buy.stripe.com/7sI16V417fQfg7ecMU",  
  chillguy: "https://buy.stripe.com/dR6g1P69fcE39IQeV4",
  neonotte: "https://buy.stripe.com/28ocPD7dj5bB7AI00i",
  themaster: "https://buy.stripe.com/eVa16Vbtz6fF6wE28j",
  theoverkill: "https://buy.stripe.com/3cs02R55bavV1ckdR2"
};

const PCConfigDetails = () => {
  const { toast } = useToast();
  const { configId } = useParams();
  const [resolution, setResolution] = useState<"FHD" | "2K" | "4K">("FHD");
  const [isLoading, setIsLoading] = useState(false);
  const selectedConfig = prebuiltConfigs[configId || ""];

  const handleCheckout = () => {
    if (!selectedConfig || !configId) {
      toast({
        title: "Erreur",
        description: "Configuration non trouvée",
        variant: "destructive"
      });
      return;
    }

    const stripeLink = stripeLinks[configId];
    if (!stripeLink) {
      toast({
        title: "Erreur",
        description: "Lien de paiement non trouvé",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    window.location.href = stripeLink;
  };

  if (!selectedConfig) {
    return <div>Configuration non trouvée</div>;
  }

  return (
    <div className="space-y-12 px-4 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-forge-orange">{selectedConfig.name}</h2>
        <p className="text-2xl font-semibold">{selectedConfig.price}€</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <img
                    src={selectedConfig.images.cpu}
                    alt="CPU"
                    className="w-full h-48 object-contain"
                  />
                  <p className="text-center text-sm">Processeur</p>
                </div>
                <div className="space-y-2">
                  <img
                    src={selectedConfig.images.gpu}
                    alt="GPU"
                    className="w-full h-48 object-contain"
                  />
                  <p className="text-center text-sm">Carte graphique</p>
                </div>
                <div className="space-y-2">
                  <img
                    src="/placeholder.svg"
                    alt="Boitier"
                    className="w-full h-48 object-contain"
                  />
                  <p className="text-center text-sm">Boitier</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <PCComponentsList components={selectedConfig.components} />
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? "Redirection..." : "Passer commande"}
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <ResolutionSelector
            selectedResolution={resolution}
            onResolutionChange={setResolution}
          />
          <GamePerformance resolution={resolution} config={selectedConfig} />
        </div>
      </div>
    </div>
  );
};

export default PCConfigDetails;
