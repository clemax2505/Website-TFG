import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaptopServiceForm from "@/components/services/LaptopServiceForm";
import { Card } from "@/components/ui/card";

const LaptopService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Service PC Portable Gaming</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Optimisez les performances de votre PC portable gaming avec nos services spécialisés
        </p>
        
        <Card className="glass-card max-w-2xl mx-auto">
          <LaptopServiceForm />
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default LaptopService;