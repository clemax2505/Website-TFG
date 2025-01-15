import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { openEmailClient } from "@/utils/emailUtils";
import BudgetSlider from "./BudgetSlider";
import PreferenceSelector from "./PreferenceSelector";
import OSSelector from "./OSSelector";
import AssemblyOptions from "./AssemblyOptions";

const QuoteForm = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState([1000]);
  const [usage, setUsage] = useState("");
  const [email, setEmail] = useState("");
  const [os, setOs] = useState("windows10");
  const [customOs, setCustomOs] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [preference, setPreference] = useState("nvidia-intel");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [includeAssembly, setIncludeAssembly] = useState(false);
  const [selectedAssemblyPlan, setSelectedAssemblyPlan] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
Nouvelle demande de devis PC Gaming Sur Mesure

Budget: ${budget[0]}€
Usage principal: ${usage}
Système d'exploitation: ${os === 'other' ? customOs : os}
Préférence GPU/CPU: ${preference}
${includeAssembly ? `Forfait de montage choisi: ${selectedAssemblyPlan}` : ''}

Détails supplémentaires:
${additionalDetails}`;

      openEmailClient("Nouvelle demande de devis PC Gaming Sur Mesure", emailBody);

      toast({
        title: "Devis préparé !",
        description: "Votre client email va s'ouvrir avec les informations pré-remplies.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation du devis. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BudgetSlider budget={budget} setBudget={setBudget} />
      <PreferenceSelector preference={preference} setPreference={setPreference} />
      <OSSelector os={os} setOs={setOs} customOs={customOs} setCustomOs={setCustomOs} />
      <AssemblyOptions
        includeAssembly={includeAssembly}
        selectedAssemblyPlan={selectedAssemblyPlan}
        setIncludeAssembly={setIncludeAssembly}
        setSelectedAssemblyPlan={setSelectedAssemblyPlan}
      />

      <div className="space-y-2">
        <label className="text-sm font-medium">Usage principal</label>
        <Input
          placeholder="Ex: Gaming, Streaming, Montage vidéo..."
          value={usage}
          onChange={(e) => setUsage(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Détails supplémentaires</label>
        <Textarea 
          placeholder="Ajoutez ici toute information complémentaire concernant votre projet..."
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          className="min-h-[100px]"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-forge-orange hover:bg-forge-red"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Préparation..." : "Faire une demande"}
      </Button>
    </form>
<div className="h-8"></div>
  );
};

export default QuoteForm;