import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCUpgradeForm from "@/components/services/PCUpgradeForm";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";

const Upgrade = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12 lg:px-24 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Amélioration PC</h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Optimisez les performances de votre PC gaming existant
          </p>
          
          <Card className="glass-card max-w-2xl mx-auto">
            <PCUpgradeForm />
            <p className="text-sm text-gray-400 p-6 text-center">Des frais de déplacement peuvent être appliqués selon votre localisation.</p>
          </Card>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Upgrade;