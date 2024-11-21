import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Wrench, Wind, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PCComponentsGuide from "@/components/services/PCComponentsGuide";
import PCUpgradeForm from "@/components/services/PCUpgradeForm";
import LaptopServiceForm from "@/components/services/LaptopServiceForm";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>
        
        <PCComponentsGuide />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PC Gaming Sur Mesure */}
          <Card className="glass-card">
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
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Wrench className="w-12 h-12 text-forge-orange" />
              </div>
              <CardTitle className="text-2xl text-center">Amélioration PC</CardTitle>
            </CardHeader>
            <CardContent>
              <PCUpgradeForm />
            </CardContent>
          </Card>

          {/* Maintenance */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Wind className="w-12 h-12 text-forge-orange" />
              </div>
              <CardTitle className="text-2xl text-center">Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  {["Nettoyage en surface", "Changement de pâte thermique", "Optimisation logicielle"].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox id={`maintenance-${service}`} />
                      <Label htmlFor={`maintenance-${service}`}>{service}</Label>
                    </div>
                  ))}
                </div>
                <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
                  Réserver une maintenance
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* PC Portable Gaming */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Laptop className="w-12 h-12 text-forge-orange" />
              </div>
              <CardTitle className="text-2xl text-center">PC Portable Gaming</CardTitle>
            </CardHeader>
            <CardContent>
              <LaptopServiceForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Services;