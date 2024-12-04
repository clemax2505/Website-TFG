import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Thermometer, Wrench } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import MaintenanceForm from "@/components/services/MaintenanceForm";

const Maintenance = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            Maintenance PC
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="w-6 h-6 text-forge-orange" />
                  Dépoussiérage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Nettoyage complet et professionnel de votre PC pour optimiser son refroidissement
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-forge-orange" />
                  Pâte Thermique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Remplacement de la pâte thermique pour une meilleure dissipation de la chaleur
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-forge-orange" />
                  Check-up Général
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Vérification complète de votre configuration et de ses performances
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Services de maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <MaintenanceForm />
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Maintenance;