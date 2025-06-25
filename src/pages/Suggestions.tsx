
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { openEmailClient } from "@/utils/emailUtils";

const Suggestions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
        Nouvelle suggestion pour le site
        
        Email: ${email}
        
        Suggestion:
        ${suggestion}
      `;

      openEmailClient("Nouvelle suggestion pour le site", emailBody);

      toast({
        title: "Suggestion préparée !",
        description: "Votre client email va s'ouvrir avec les informations pré-remplies.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation du message.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Des idées pour le site ?</h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Vos suggestions sont précieuses ! N'hésitez pas à partager vos idées pour améliorer le site. Vous pouvez aussi me <Link to="/contact" className="text-forge-orange hover:text-forge-red underline">contacter directement</Link> pour toute question sur mes <Link to="/services" className="text-forge-orange hover:text-forge-red underline">services PC gaming</Link>.
          </p>

          <Card className="glass-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Envoyez votre suggestion</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label className="text-sm font-medium">Votre suggestion</label>
                  <Textarea
                    placeholder="Partagez vos idées pour améliorer le site..."
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-forge-orange hover:bg-forge-red"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Préparation..." : "Envoyer ma suggestion"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Intéressé par mes services ? Découvrez mon <Link to="/portfolio" className="text-forge-orange hover:text-forge-red underline">portfolio</Link> ou mes <Link to="/prebuilt" className="text-forge-orange hover:text-forge-red underline">configurations PC gaming</Link>.
            </p>
            <p className="text-gray-400">
              Prêt à démarrer votre projet ? <Link to="/quote" className="text-forge-orange hover:text-forge-red underline">Demandez un devis personnalisé</Link>.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Suggestions;
