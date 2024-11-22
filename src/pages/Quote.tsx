import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    const emailBody = `
      Nouvelle demande de PC sur mesure
      
      Email client: ${data.email}
      Budget: ${data.budget}€
      
      Usage principal: ${data.usage}
      Jeux préférés: ${data.games}
      
      Besoins spécifiques:
      ${data.requirements}
    `;

    try {
      const mailtoLink = `mailto:clementmontagepc@gmail.com?subject=Nouvelle demande de PC sur mesure&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Demande préparée",
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
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Devis PC Gaming Sur Mesure</h1>
        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Configurez votre projet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label>Budget approximatif (€)</Label>
                <Input
                  type="number"
                  name="budget"
                  placeholder="Votre budget en euros"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Usage principal</Label>
                <Input
                  name="usage"
                  placeholder="Ex: Gaming, Streaming, Montage vidéo..."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Jeux préférés</Label>
                <Input
                  name="games"
                  placeholder="Ex: Cyberpunk 2077, Call of Duty, League of Legends..."
                />
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
                <Label>Besoins spécifiques</Label>
                <Textarea 
                  name="requirements"
                  placeholder="Ajoutez ici toute information complémentaire concernant votre projet..."
                  className="min-h-[100px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-forge-orange hover:bg-forge-red"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Préparation..." : "Demander un devis"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;