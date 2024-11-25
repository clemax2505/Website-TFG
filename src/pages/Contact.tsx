import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

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
        ${message}
      `;

      const mailtoLink = `mailto:clementmontagepc@gmail.com?subject=Nouveau message de contact&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;