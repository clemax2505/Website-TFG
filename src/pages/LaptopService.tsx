import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaptopServiceForm from "@/components/services/LaptopServiceForm";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";

const LaptopService = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Service PC Portable Gaming<br></br><br></br></h1>
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
