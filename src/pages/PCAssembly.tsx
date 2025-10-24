import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCAssemblyForm from "@/components/services/PCAssemblyForm";
import PageTransition from "@/components/PageTransition";

const PCAssembly = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-forge-orange via-forge-red to-forge-orange animate-[gradient_6s_ease-in-out_infinite] bg-[length:200%_200%]">
              Service de Montage PC
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez votre forfait et listez vos composants pour faire une demande personnalisée
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <PCAssemblyForm />
            <p className="text-sm text-muted-foreground mt-6 text-center flex items-center justify-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-forge-orange"></span>
              Des frais de déplacement peuvent être appliqués selon votre localisation
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PCAssembly;
