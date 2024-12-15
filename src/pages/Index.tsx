import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <Link to="/prebuilt">
            <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-forge-orange mb-4">PC Pré-configurés</h2>
                <p className="text-gray-400">Découvrez notre sélection de PC gaming optimisés pour tous les budgets</p>
              </CardContent>
            </Card>
          </Link>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;