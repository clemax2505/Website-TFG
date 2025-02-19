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
  // ... reste des liens stripe ...
};

const PCConfigDetails = () => {
  const { toast } = useToast();
  const { ConfigId } = useParams<{ ConfigId: string }>();
  const [resolution, setResolution] = useState<"FHD" | "2K" | "4K">("FHD");
  const [isLoading, setIsLoading] = useState(false);

  // Vérifier si l'id existe et si la config correspondante existe
  if (!id || !prebuiltConfigs[ConfigId]) {
    return <div>Configuration non trouvée</div>;
  }

  const selectedConfig = prebuiltConfigs[ConfigId];

  const handleCheckout = () => {
    const stripeLink = stripeLinks[ConfigId];
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
                    src={selectedConfig.images.case}
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
