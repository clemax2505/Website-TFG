import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { PCConfig } from "@/components/prebuilt/types";
import PreBuiltPCCard from "@/components/prebuilt/PreBuiltPCCard";

const PreBuiltPCs = () => {
  const priceRanges: PCConfig[] = [
    { id: "budget", name: "PC Gaming Budget", price: 1000, description: "Configuration idéale pour le gaming en 1080p" },
    { id: "mid1", name: "PC Gaming Plus", price: 1200, description: "Gaming 1080p/1440p avec de bonnes performances" },
    { id: "mid2", name: "PC Gaming Pro", price: 1500, description: "Gaming 1440p avec d'excellentes performances" },
    { id: "high1", name: "PC Gaming Elite", price: 1800, description: "Gaming 1440p/4K avec performances premium" },
    { id: "high2", name: "PC Gaming Ultra", price: 2000, description: "Gaming 4K avec performances exceptionnelles" },
    { id: "extreme1", name: "PC Gaming Extreme", price: 2500, description: "Gaming 4K avec performances maximales" },
    { id: "extreme2", name: "PC Gaming Master", price: 3000, description: "Configuration ultra-premium sans compromis" },
    { id: "extreme3", name: "PC Gaming Ultimate", price: 3500, description: "Pour les joueurs les plus exigeants" },
    { id: "extreme4", name: "PC Gaming Legend", price: 4000, description: "Une puissance de calcul légendaire" },
    { id: "maxed", name: "Maxi Config", price: 5000, description: "La configuration ultime sans limite" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            PC Gaming Pré-configurés
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos configurations optimisées pour chaque budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceRanges.map((config) => (
              <PreBuiltPCCard key={config.id} config={config} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PreBuiltPCs;