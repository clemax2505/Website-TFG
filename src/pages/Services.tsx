import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Wrench, Wind, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import PCComponentsGuide from "@/components/services/PCComponentsGuide";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Nos Services</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Découvrez nos services professionnels pour votre PC gaming
        </p>

        <PCComponentsGuide />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link to="/custom-pc">
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Monitor className="w-12 h-12 text-forge-orange" />
                </div>
                <CardTitle className="text-xl text-center">PC Gaming Sur Mesure</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-400">
                Configuration personnalisée selon vos besoins et votre budget
              </CardContent>
            </Card>
          </Link>

          <Link to="/upgrade">
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Wrench className="w-12 h-12 text-forge-orange" />
                </div>
                <CardTitle className="text-xl text-center">Amélioration PC</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-400">
                Optimisation de votre configuration existante
              </CardContent>
            </Card>
          </Link>

          <Link to="/maintenance">
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Wind className="w-12 h-12 text-forge-orange" />
                </div>
                <CardTitle className="text-xl text-center">Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-400">
                Service de maintenance et nettoyage professionnel
              </CardContent>
            </Card>
          </Link>

          <Link to="/laptop-service">
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Laptop className="w-12 h-12 text-forge-orange" />
                </div>
                <CardTitle className="text-xl text-center">PC Portable Gaming</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-400">
                Services dédiés aux ordinateurs portables gaming
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
