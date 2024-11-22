import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const PCUpgradeForm = () => {
  const { toast } = useToast();
  const components = [
    "CPU", "GPU", "RAM", "Stockage", "Alimentation", "Boîtier", "Carte Mère", "Refroidissement CPU"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande d'amélioration enregistrée",
      description: "Nous vous contacterons pour discuter des options d'amélioration.",
    });
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
            placeholder={component}
            className="mb-2"
          />
        ))}
      </div>
      <div className="space-y-2">
        <Label>Budget total</Label>
        <Input
          type="number"
          placeholder="Budget en €"
        />
      </div>
      <div className="space-y-2">
        <Label>Composants à améliorer</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {components.map((component) => (
            <div key={component} className="flex items-center space-x-2">
              <Checkbox id={`upgrade-${component}`} />
              <Label htmlFor={`upgrade-${component}`}>{component}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Détails supplémentaires</Label>
        <Textarea 
          placeholder="Ajoutez ici toute information complémentaire concernant votre projet..."
          className="min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
        Demander un devis
      </Button>
    </form>
  );
};

export default PCUpgradeForm;