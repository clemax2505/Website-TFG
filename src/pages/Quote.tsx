import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState([1000]);
  const [usage, setUsage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Devis envoyé !",
      description: "Nous vous contacterons rapidement pour discuter de votre projet.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Demande de Devis</h1>
        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Configurez votre projet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget approximatif (€)</label>
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  max={5000}
                  min={500}
                  step={100}
                  className="py-4"
                />
                <p className="text-right text-forge-orange font-semibold">{budget[0]}€</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Usage principal</label>
                <Input
                  placeholder="Ex: Gaming, Streaming, Montage vidéo..."
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">
                Obtenir mon devis
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Quote;