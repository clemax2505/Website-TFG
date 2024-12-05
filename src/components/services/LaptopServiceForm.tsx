import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";
import { calculateTravelFee, isValidZipCode } from "@/utils/distanceUtils";

const LaptopServiceForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [travelFee, setTravelFee] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleZipCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZipCode = e.target.value;
    setZipCode(newZipCode);
    
    if (isValidZipCode(newZipCode)) {
      setIsCalculating(true);
      try {
        const fee = await calculateTravelFee(newZipCode);
        setTravelFee(fee);
      } catch (error) {
        console.error("Error calculating travel fee:", error);
        toast({
          title: "Erreur",
          description: "Impossible de calculer les frais de déplacement.",
          variant: "destructive"
        });
      } finally {
        setIsCalculating(false);
      }
    } else {
      setTravelFee(0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const emailBody = `
Nouvelle demande de service PC portable

Email client: ${formData.get('email')}
Code postal: ${zipCode}
Frais de déplacement: ${travelFee}€
Modèle PC portable: ${formData.get('model')}
Description du problème: ${formData.get('description')}`;

    try {
      openEmailClient("Nouvelle demande de service PC portable", emailBody);

      toast({
        title: "Demande envoyée !",
        description: "Votre client email va s'ouvrir avec les informations pré-remplies.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation de l'email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div className="space-y-2">
        <Label htmlFor="model">Modèle de PC portable</Label>
        <Input
          id="model"
          name="model"
          placeholder="Ex: ASUS ROG Strix G15"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipcode">Code Postal</Label>
        <Input
          id="zipcode"
          type="text"
          value={zipCode}
          onChange={handleZipCodeChange}
          placeholder="69XXX"
          pattern="69\d{3}"
          title="Code postal du Rhône (69XXX)"
          required
        />
        {isCalculating ? (
          <p className="text-forge-orange mt-2">Calcul des frais en cours...</p>
        ) : travelFee > 0 && (
          <p className="text-forge-orange mt-2">
            Frais de déplacement : {travelFee}€ (distance {'>'} 15km)
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description du problème</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Décrivez le problème que vous rencontrez..."
          className="min-h-[100px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="votre@email.com"
          required
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-forge-orange hover:bg-forge-red"
        disabled={isSubmitting || !isValidZipCode(zipCode) || isCalculating}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
};

export default LaptopServiceForm;