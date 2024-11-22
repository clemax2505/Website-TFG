import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const PCUpgradeForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const components = [
    "CPU", "GPU", "RAM", "Stockage", "Alimentation", "Boîtier", "Carte Mère", "Refroidissement CPU"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await emailjs.send(
        'service_2qvzwzp',
        'template_upgrade',
        {
          to_email: 'clementmontagepc@gmail.com',
          from_email: data.email,
          current_config: components.map(comp => `${comp}: ${data[comp.toLowerCase()]}`).join('\n'),
          budget: data.budget,
          components_to_upgrade: components
            .filter(comp => (data[`upgrade-${comp}`] === 'on'))
            .join(', '),
          additional_details: data.details
        },
        'Votre_Public_Key'
      );

      toast({
        title: "Demande d'amélioration enregistrée",
        description: "Nous vous contacterons pour discuter des options d'amélioration.",
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

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-4">
      <div className="space-y-2">
        <Label>Configuration actuelle</Label>
        {components.map((component) => (
          <Input
            key={component}
            name={component.toLowerCase()}
            placeholder={component}
            className="mb-2"
          />
        ))}
      </div>
      <div className="space-y-2">
        <Label>Budget total</Label>
        <Input
          type="number"
          name="budget"
          placeholder="Budget en €"
        />
      </div>
      <div className="space-y-2">
        <Label>Composants à améliorer</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {components.map((component) => (
            <div key={component} className="flex items-center space-x-2">
              <Checkbox id={`upgrade-${component}`} name={`upgrade-${component}`} />
              <Label htmlFor={`upgrade-${component}`}>{component}</Label>
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
      <div className="space-y-2">
        <Label>Détails supplémentaires</Label>
        <Textarea 
          name="details"
          placeholder="Ajoutez ici toute information complémentaire concernant votre projet..."
          className="min-h-[100px]"
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

export default PCUpgradeForm;