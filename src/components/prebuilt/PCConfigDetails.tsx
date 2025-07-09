import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PCComponentsList from "./PCComponentsList";
import { Card, CardContent } from "@/components/ui/card";
import GamePerformance from "./GamePerformance";
import ResolutionSelector from "./ResolutionSelector";
import { prebuiltConfigs } from "@/data/prebuiltConfigs";
import { useToast } from "@/hooks/use-toast";

const stripeLinks: { [key: string]: string } = {
  thebeginning: "https://buy.stripe.com/3cs02RcxD1Zp8EM9AC",
  littleguy: "https://buy.stripe.com/3cs4j7btzdI77AIfZ1",
  cheapy: "https://buy.stripe.com/28ocPD1SZ5bBbQY9AN",
  ares: "https://buy.stripe.com/5kAcPD2X347x5sA28c",
  thelegend: "https://buy.stripe.com/8wM9Dr55bgUj8EM149",
  2kking: "https://buy.stripe.com/4gw5nb9lr1Zp8EMbIP",
  skillissues: "https://buy.stripe.com/4gwaHv7djbzZ5sAaEK",
};

const PCConfigDetails = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  console.log("ID reçu depuis l'URL:", id);
  console.log("Configurations disponibles:", Object.keys(prebuiltConfigs));
  const [resolution, setResolution] = useState<"FHD" | "2K" | "4K">("FHD");
  const [isLoading, setIsLoading] = useState(false);

  // Vérifier si l'id existe et si la config correspondante existe
  if (!id || !prebuiltConfigs[id]) {
    console.log("Configuration non trouvée pour l'ID:", id);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Configuration non trouvée</h2>
        <p className="text-gray-400">L'ID demandé "{id}" ne correspond à aucune configuration disponible.</p>
        <p className="text-sm text-gray-500 mt-2">Configurations disponibles: {Object.keys(prebuiltConfigs).join(", ")}</p>
      </div>
    );
  }

  const selectedConfig = prebuiltConfigs[id];
  console.log("Configuration trouvée:", selectedConfig);

  const handleCheckout = () => {
    const stripeLink = stripeLinks[id];
    if (!stripeLink) {
      toast({
        title: "Erreur",
        description: "Lien de paiement non trouvé",
        variant: "destructive"
      });
      return;
    }

    console.log("Navigation vers:", stripeLink);
    setIsLoading(true);
    
    // Utiliser une approche plus robuste pour la navigation
    try {
      window.open(stripeLink, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Erreur lors de l'ouverture du lien:", error);
      window.location.href = stripeLink;
    } finally {
      // Reset loading state après un délai court
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <div className="space-y-8 px-4 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-forge-orange">{selectedConfig.name}</h2>
        <p className="text-2xl font-semibold">{selectedConfig.price}€</p>
      </div>

      {/* Section des images principales - CPU et GPU côte à côte */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <img
                src={selectedConfig.images.cpu}
                alt="CPU"
                className="w-full h-64 object-contain"
              />
              <p className="text-center text-lg font-medium">Processeur</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <img
                src={selectedConfig.images.gpu}
                alt="GPU"
                className="w-full h-64 object-contain"
              />
              <p className="text-center text-lg font-medium">Carte graphique</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contenu principal en deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Image du boitier */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="space-y-4">
                <img
                  src={selectedConfig.images.case}
                  alt="Boitier"
                  className="w-full h-48 object-contain"
                />
                <p className="text-center text-lg font-medium">Boitier</p>
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
              type="button"
            >
              {isLoading ? "Redirection..." : "Passer commande"}
            </Button>
          </div>
        </div>

        <div className="space-y-6">
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
