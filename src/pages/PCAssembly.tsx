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
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            Service de Montage PC
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Choisissez votre forfait et listez vos composants pour faire une demande personnalisée
          </p>

          <div className="max-w-4xl mx-auto">
            <PCAssemblyForm />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PCAssembly;
