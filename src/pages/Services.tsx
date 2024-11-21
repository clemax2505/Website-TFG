import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Wrench, Wind, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Services = () => {
  const { toast } = useToast();
  const [currentConfig, setCurrentConfig] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
  });
  const [upgradeBudget, setUpgradeBudget] = useState("");
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);
  const [maintenanceOptions, setMaintenanceOptions] = useState<string[]>([]);
  const [laptopServices, setLaptopServices] = useState<string[]>([]);
  const [laptopPart, setLaptopPart] = useState("");

  const handleUpgradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande d'amélioration enregistrée",
      description: "Nous vous contacterons pour discuter des options d'amélioration.",
    });
  };

  const handleMaintenanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de maintenance enregistrée",
      description: "Nous vous contacterons pour planifier l'intervention.",
    });
  };

  const handleLaptopSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de service laptop enregistrée",
      description: "Nous vous contacterons pour évaluer les besoins de votre portable.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PC Gaming Sur Mesure */}
          <Card className="glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Monitor className="w-12 h-12 text-forge-orange" />
              </div>
              <CardTitle className="text-2xl text-center">PC Gaming Sur Mesure</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Configuration personnalisée selon vos besoins et votre budget
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/custom-pc">
                <Button className="w-full bg-forge-orange hover:bg-forge-red">
                  Configurer mon PC
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Amélioration PC */}
          <Card className="glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Wrench className="w-12 h-12 text-forge-orange" />
              </div>
              <CardTitle className="text-2xl text-center">Amélioration PC</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpgradeSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Configuration actuelle</Label>
                  <Input
                    placeholder="Processeur (CPU)"
                    value={currentConfig.cpu}
                    onChange={(e) => setCurrentConfig({ ...currentConfig, cpu: e.target.value })}
                  />
                  <Input
                    placeholder="Carte graphique (GPU)"
                    value={currentConfig.gpu}
                    onChange={(e) => setCurrentConfig({ ...currentConfig, gpu: e.target.value })}
                  />
                  <Input
                    placeholder="Mémoire RAM"
                    value={currentConfig.ram}
                    onChange={(e) => setCurrentConfig({ ...currentConfig, ram: e.target.value })}
                  />
                  <Input
                    placeholder="Stockage"
                    value={currentConfig.storage}
                    onChange={(e) => setCurrentConfig({ ...currentConfig, storage: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Budget total</Label>
                  <Input
                    type="number"
                    placeholder="Budget en €"
                    value={upgradeBudget}
                    onChange={(e) => setUpgradeBudget(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Composants à améliorer</Label>
                  <div className="space-y-2">
                    {["CPU", "GPU", "RAM", "Stockage"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedUpgrades.includes(item)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedUpgrades([...selectedUpgrades, item]);
                            } else {
                              setSelectedUpgrades(selectedUpgrades.filter((i) => i !== item));
                            }
                          }}
                        />
                        <Label>{item}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
                  Demander un devis
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Maintenance */}
          <Card className="glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Wind className="w-12 h-12 text-forge-orange" />
              </div>
              <CardTitle className="text-2xl text-center">Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleMaintenanceSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Services souhaités</Label>
                  <div className="space-y-2">
                    {[
                      "Nettoyage en surface",
                      "Changement de pâte thermique",
                      "Optimisation logicielle"
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          checked={maintenanceOptions.includes(service)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setMaintenanceOptions([...maintenanceOptions, service]);
                            } else {
                              setMaintenanceOptions(maintenanceOptions.filter((s) => s !== service));
                            }
                          }}
                        />
                        <Label>{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
                  Réserver une maintenance
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* PC Portable Gaming */}
          <Card className="glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Laptop className="w-12 h-12 text-forge-orange" />
              </div>
              <CardTitle className="text-2xl text-center">PC Portable Gaming</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLaptopSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Services de maintenance</Label>
                  <div className="space-y-2">
                    {["Changement de pâte thermique", "Dépoussiérage"].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          checked={laptopServices.includes(service)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setLaptopServices([...laptopServices, service]);
                            } else {
                              setLaptopServices(laptopServices.filter((s) => s !== service));
                            }
                          }}
                        />
                        <Label>{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Pièce à changer</Label>
                  <RadioGroup value={laptopPart} onValueChange={setLaptopPart}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="storage" id="storage" />
                      <Label htmlFor="storage">Stockage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ram" id="ram" />
                      <Label htmlFor="ram">RAM</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="screen" id="screen" />
                      <Label htmlFor="screen">Écran</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none" />
                      <Label htmlFor="none">Aucune</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
                  Demander un devis
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Services;