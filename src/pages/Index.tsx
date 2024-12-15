import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor } from "lucide-react";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-8">
            <Link to="/prebuilt">
              <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Monitor className="w-12 h-12 text-forge-orange" />
                  </div>
                  <CardTitle className="text-xl text-center">PC Pré-configurés</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400">Découvrez notre sélection de PC gaming optimisés pour tous les budgets</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;