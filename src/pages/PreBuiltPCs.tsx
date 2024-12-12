import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { PCConfig } from "@/components/prebuilt/types";
import PreBuiltPCCard from "@/components/prebuilt/PreBuiltPCCard";

const PreBuiltPCs = () => {
  const priceRanges: PCConfig[] = [
    { 
      id: "budget", 
      name: "PC Gaming Budget", 
      price: 1000, 
      description: "Configuration idéale pour le gaming en 1080p",
      link: "https://dropreference.com/fr/setups/link/63bc78f5ad63d416c5d70646"
    },
    { 
      id: "mid1", 
      name: "PC Gaming Plus", 
      price: 1200, 
      description: "Gaming 1080p/1440p avec de bonnes performances",
      link: "https://dropreference.com/fr/setups/link/6734a4123eb370752095e925"
    },
    { 
      id: "mid2", 
      name: "PC Gaming Pro", 
      price: 1500, 
      description: "Gaming 1440p avec d'excellentes performances",
      link: "https://dropreference.com/fr/setups/link/67345c4b3eb370752095e2d9"
    },
    { 
      id: "high1", 
      name: "PC Gaming Elite", 
      price: 1800, 
      description: "Gaming 1440p/4K avec performances premium",
      link: "https://dropreference.com/fr/setups/link/674c6d617af66d5d2e871a88"
    },
    { 
      id: "high2", 
      name: "PC Gaming Ultra", 
      price: 2000, 
      description: "Gaming 4K avec performances exceptionnelles",
      link: "https://dropreference.com/fr/setups/link/674457d9b5f8021df8cbd4a1"
    },
    { 
      id: "extreme1", 
      name: "PC Gaming Extreme", 
      price: 2500, 
      description: "Gaming 4K avec performances maximales",
      link: "https://dropreference.com/fr/setups/link/674d792cb5f6684d9af0bd95"
    },
    { 
      id: "extreme2", 
      name: "PC Gaming Master", 
      price: 2800, 
      description: "Configuration ultra-premium avec boîtier Antec C5",
      link: "https://dropreference.com/fr/setups/link/675ae3212e436301fdb05ab0"
    },
    { 
      id: "extreme3", 
      name: "PC Gaming Ultimate", 
      price: 3200, 
      description: "Configuration premium avec double SSD P3 2To",
      link: "https://dropreference.com/fr/setups/link/674bb3306d68ed6dc0391afc"
    },
    { 
      id: "extreme4", 
      name: "PC Gaming Legend", 
      price: 4000, 
      description: "Configuration ultime avec RAM et SSD doublés + ventilateurs QX120",
      link: "https://dropreference.com/fr/setups/link/675aed0f2e436301fdb05bb8"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            PC Gaming Pré-configurés
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos configurations optimisées pour chaque budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceRanges.map((config) => (
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