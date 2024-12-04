import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";
import { calculateTravelFee, isValidZipCode } from "@/utils/distanceUtils";

const MaintenanceForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [travelFee, setTravelFee] = useState(0);

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZipCode = e.target.value;
    setZipCode(newZipCode);
    
    if (isValidZipCode(newZipCode)) {
      const fee = calculateTravelFee(newZipCode);
      setTravelFee(fee);
    } else {
      setTravelFee(0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const services = ['depoussierage', 'pate-thermique', 'checkup']
      .filter(service => formData.get(service) === 'on')
      .join(', ');

    const emailBody = `
Nouvelle demande de maintenance

Email client: ${formData.get('email')}
Code postal: ${zipCode}
Frais de déplacement: ${travelFee}€
Services demandés: ${services}`;

    try {
      openEmailClient("Nouvelle demande de maintenance", emailBody);

      toast({
        title: "Demande de maintenance préparée",
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
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="depoussierage" name="depoussierage" />
          <Label htmlFor="depoussierage">Dépoussiérage en profondeur</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="pate-thermique" name="pate-thermique" />
          <Label htmlFor="pate-thermique">Changement de la pâte thermique</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="checkup" name="checkup" />
          <Label htmlFor="checkup">Check up général</Label>
        </div>
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
        {travelFee > 0 && (
          <p className="text-forge-orange mt-2">
            Frais de déplacement : {travelFee}€ (distance {'>'}15km)
          </p>
        )}
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
        disabled={isSubmitting || !isValidZipCode(zipCode)}
      >
        {isSubmitting ? "Préparation..." : "Demander une maintenance"}
      </Button>
    </form>
  );
};

export default MaintenanceForm;