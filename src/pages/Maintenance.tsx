import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Maintenance = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de maintenance enregistrée",
      description: "Nous vous contacterons pour planifier l'intervention.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Maintenance PC</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Gardez votre PC gaming en parfait état avec notre service de maintenance professionnelle
        </p>

        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Services de maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="depoussierage" />
                  <Label htmlFor="depoussierage">Dépoussiérage en profondeur</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pate-thermique" />
                  <Label htmlFor="pate-thermique">Changement de la pâte thermique</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkup" />
                  <Label htmlFor="checkup">Check up général</Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
                Demander une maintenance
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Maintenance;