import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Quote = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState([1000]);
  const [usage, setUsage] = useState("");
  const [email, setEmail] = useState("");
  const [os, setOs] = useState("windows10");
  const [customOs, setCustomOs] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Devis envoyé !",
      description: "Nous vous contacterons rapidement pour discuter de votre projet de PC gaming sur mesure.",
    });
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

              <div className="space-y-4">
                <label className="text-sm font-medium">Système d'exploitation</label>
                <RadioGroup value={os} onValueChange={setOs} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="windows10" id="windows10" />
                    <Label htmlFor="windows10">Windows 10</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="windows11" id="windows11" />
                    <Label htmlFor="windows11">Windows 11</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Autre</Label>
                  </div>
                </RadioGroup>
                {os === "other" && (
                  <Input
                    placeholder="Précisez votre système d'exploitation"
                    value={customOs}
                    onChange={(e) => setCustomOs(e.target.value)}
                    className="mt-2"
                  />
                )}
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
      <Footer />
    </div>
  );
};

export default Quote;