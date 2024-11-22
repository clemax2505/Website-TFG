import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const LaptopServiceForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await emailjs.send(
        'service_2qvzwzp',
        'template_laptop',
        {
          to_email: 'clementmontagepc@gmail.com',
          from_email: data.email,
          maintenance_services: ['Changement de pâte thermique', 'Dépoussiérage']
            .filter(service => data[`service-${service}`] === 'on')
            .join(', '),
          replacement_parts: ['Stockage', 'RAM', 'Écran']
            .filter(part => data[`part-${part}`] === 'on')
            .join(', ')
        },
        'Votre_Public_Key'
      );

      toast({
        title: "Demande de service laptop enregistrée",
        description: "Nous vous contacterons pour évaluer les besoins de votre portable.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de la demande.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const replacementParts = ["Stockage", "RAM", "Écran"];

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-4">
      <div className="space-y-2">
        <Label>Services de maintenance</Label>
        <div className="space-y-2">
          {["Changement de pâte thermique", "Dépoussiérage"].map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox id={`service-${service}`} name={`service-${service}`} />
              <Label htmlFor={`service-${service}`}>{service}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Pièces à changer</Label>
        <div className="space-y-2">
          {replacementParts.map((part) => (
            <div key={part} className="flex items-center space-x-2">
              <Checkbox id={`part-${part}`} name={`part-${part}`} />
              <Label htmlFor={`part-${part}`}>{part}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
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
        {isSubmitting ? "Envoi en cours..." : "Demander un devis"}
      </Button>
    </form>
  );
};

export default LaptopServiceForm;