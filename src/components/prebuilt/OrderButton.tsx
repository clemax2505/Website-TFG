import { Button } from "@/components/ui/button";
import { openEmailClient } from "@/utils/emailUtils";
import { PCConfig } from "./types";

interface OrderButtonProps {
  config: PCConfig;
  components: string[];
}

const OrderButton = ({ config, components }: OrderButtonProps) => {
  const handleEmailRequest = () => {
    const emailBody = `
Nouvelle demande de configuration PC

Configuration demandée : ${config?.name}
Prix : ${config?.price}€

Liste des composants :
${components.join('\n')}
    `;

    openEmailClient("Nouvelle demande de configuration PC", emailBody);
  };

  return (
    <Button 
      variant="outline" 
      size="lg"
      onClick={handleEmailRequest}
    >
      Passer commande
    </Button>
  );
};

export default OrderButton;