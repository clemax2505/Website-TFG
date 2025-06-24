
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
Nouveau message de contact

Nom: ${name}
Email: ${email}

Message:
${message}`;

      openEmailClient("Nouveau message de contact", emailBody);

      toast({
        title: "Message préparé !",
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
        <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Contactez-nous</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Une question sur mes services ? Besoin d'un conseil personnalisé ? N'hésitez pas à me contacter. Vous pouvez aussi consulter ma <Link to="/#faq" className="text-forge-orange hover:text-forge-red underline">FAQ</Link> pour les questions courantes ou découvrir mes <Link to="/services" className="text-forge-orange hover:text-forge-red underline">services détaillés</Link>.
        </p>
        
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom</label>
                <Input 
                  placeholder="Votre nom" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="min-h-[150px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-forge-orange hover:bg-forge-red"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Préparation..." : "Envoyer"}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Prêt à commencer votre projet PC gaming ? <Link to="/quote" className="text-forge-orange hover:text-forge-red underline">Demandez un devis personnalisé</Link> ou découvrez mes <Link to="/prebuilt" className="text-forge-orange hover:text-forge-red underline">configurations pré-établies</Link>.
          </p>
          <p className="text-gray-400">
            Consultez également mon <Link to="/portfolio" className="text-forge-orange hover:text-forge-red underline">portfolio</Link> pour voir mes réalisations précédentes.
          </p>
        </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
