
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PreBuiltPCCard from "@/components/prebuilt/PreBuiltPCCard";
import { allPrebuiltConfigs } from "@/data/allPrebuiltConfigs";

const PreBuiltPCs = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            PC Gaming Préconfigurés
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPrebuiltConfigs.map((config) => (
              <PreBuiltPCCard key={config.id} config={config} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PreBuiltPCs;
