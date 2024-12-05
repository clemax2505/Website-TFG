import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";

const LaptopServiceForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { id: "screen", label: "Changement écran" },
    { id: "ram", label: "Changement RAM" },
    { id: "ssd", label: "Changement SSD" },
    { id: "battery", label: "Changement batterie" },
    { id: "cleaning", label: "Nettoyage poussière" },
    { id: "thermal", label: "Changement pâte thermique" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const selectedServicesText = selectedServices.length > 0 
      ? `\nServices demandés:\n${selectedServices.map(service => 
          services.find(s => s.id === service)?.label
        ).join('\n')}`
      : '';

    const emailBody = `
Nouvelle demande de service PC portable

Email client: ${formData.get('email')}
Modèle PC portable: ${formData.get('model')}
Description du problème: ${formData.get('description')}${selectedServicesText}`;

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

      <div className="space-y-4">
        <Label>Services requis</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={(checked) => {
                  setSelectedServices(prev =>
                    checked
                      ? [...prev, service.id]
                      : prev.filter(id => id !== service.id)
                  );
                }}
              />
              <Label htmlFor={service.id}>{service.label}</Label>
            </div>
          ))}
        </div>
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
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
};

export default LaptopServiceForm;