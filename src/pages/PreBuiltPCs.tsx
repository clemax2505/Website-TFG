
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import PreBuiltPCCard from "@/components/prebuilt/PreBuiltPCCard";
import { allPrebuiltConfigs } from "@/data/allPrebuiltConfigs";

const PreBuiltPCs = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 py-2 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            PC Gaming préconfigurés
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos configurations optimisées pour chaque budget. Besoin d'une solution personnalisée ? <Link to="/quote" className="text-forge-orange hover:text-forge-red underline">Demandez un devis sur mesure</Link> ou consultez mes <Link to="/services" className="text-forge-orange hover:text-forge-red underline">autres services</Link>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPrebuiltConfigs.map((config) => (
              <PreBuiltPCCard key={config.id} config={config} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-4">
              Vous hésitez entre plusieurs configurations ? Consultez mon <Link to="/portfolio" className="text-forge-orange hover:text-forge-red underline">portfolio</Link> pour voir mes réalisations ou <Link to="/contact" className="text-forge-orange hover:text-forge-red underline">contactez-moi</Link> pour des conseils personnalisés.
            </p>
            <p className="text-gray-400">
              Votre PC actuel a besoin d'une <Link to="/upgrade" className="text-forge-orange hover:text-forge-red underline">amélioration</Link> ou d'une <Link to="/maintenance" className="text-forge-orange hover:text-forge-red underline">maintenance</Link> ? Découvrez mes services spécialisés.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PreBuiltPCs;
