import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const LaptopServiceForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de service laptop enregistrée",
      description: "Nous vous contacterons pour évaluer les besoins de votre portable.",
    });
  };

  const replacementParts = ["Stockage", "RAM", "Écran"];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>Services de maintenance</Label>
        <div className="space-y-2">
          {["Changement de pâte thermique", "Dépoussiérage"].map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox id={`service-${service}`} />
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
              <Checkbox id={`part-${part}`} />
              <Label htmlFor={`part-${part}`}>{part}</Label>
            </div>
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
        Demander un devis
      </Button>
    </form>
  );
};

export default LaptopServiceForm;