import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaptopServiceForm from "@/components/services/LaptopServiceForm";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { Laptop, Wrench, Clock, Shield } from "lucide-react";

const LaptopService = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            Service PC Portable Gaming
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 glass-card">
              <Laptop className="w-12 h-12 text-forge-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnostic Complet</h3>
              <p className="text-gray-400">Analyse approfondie de votre PC portable gaming pour identifier les problèmes</p>
            </Card>

            <Card className="p-6 glass-card">
              <Wrench className="w-12 h-12 text-forge-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Réparation Expert</h3>
              <p className="text-gray-400">Intervention professionnelle sur tous types de pannes matérielles</p>
            </Card>

            <Card className="p-6 glass-card">
              <Clock className="w-12 h-12 text-forge-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Intervention Rapide</h3>
              <p className="text-gray-400">Service express avec délais d'intervention optimisés</p>
            </Card>

            <Card className="p-6 glass-card">
              <Shield className="w-12 h-12 text-forge-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Garantie Satisfaction</h3>
              <p className="text-gray-400">Engagement qualité sur toutes nos interventions</p>
            </Card>
          </div>

          <Card className="glass-card max-w-2xl mx-auto">
            <LaptopServiceForm />
          </Card>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default LaptopService;