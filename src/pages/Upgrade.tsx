import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCUpgradeForm from "@/components/services/PCUpgradeForm";
import { Card } from "@/components/ui/card";

const Upgrade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Amélioration PC</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Optimisez les performances de votre PC gaming existant
        </p>
        
        <Card className="glass-card max-w-2xl mx-auto">
          <PCUpgradeForm />
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Upgrade;
