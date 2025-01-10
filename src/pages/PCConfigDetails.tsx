import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PCConfigDetails from "@/components/prebuilt/PCConfigDetails";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PCConfigDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => navigate('/prebuilt')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux configurations
          </Button>
          
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            Détails de la Configuration<br></br><br></br>
          </h1>

          <div className="max-w-3xl mx-auto">
            <PCConfigDetails />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PCConfigDetailsPage;
