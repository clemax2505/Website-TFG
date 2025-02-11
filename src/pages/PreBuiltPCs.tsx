import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { PCConfig } from "@/components/prebuilt/types";
import PreBuiltPCCard from "@/components/prebuilt/PreBuiltPCCard";

export const priceRanges: PCConfig[] = [
  { 
    id: "thebeginning", 
    name: "The Beginning", 
    price: 839.38, 
    description: "Ryzen 5 5600 & RX 6650 XT",
  },
  { 
    id: "littleguy", 
    name: "Little Guy", 
    price: 999.35, 
    description: "Ryzen 5 7500F & RX 6650 XT",
  },
  { 
    id: "cheapy", 
    name: "Cheapy", 
    price: 1188.58, 
    description: "Ryzen 5 7500F & RX 6750 XT",
  },
  { 
    id: "viper", 
    name: "Viper", 
    price: 1332.99, 
    description: "Ryzen 5 7600X & RX 6750 XT",
  },
  { 
    id: "pulsar", 
    name: "Pulsar", 
    price: 1433.17, 
    description: "Ryzen 5 7600X & RX 7800 XT",
  },
  { 
    id: "arcticold", 
    name: "Arcticold", 
    price: 2042.93, 
    description: "Ryzen 7 7700X & RX 7900 GRE",
  },
  { 
    id: "infinity", 
    name: "Infinity", 
    price: 2397.78, 
    description: "Ryzen 7 9700X & RX 7900 XTX",
  },
  { 
    id: "thehellhound", 
    name: "The Hellhound", 
    price: 2428.06, 
    description: "Ryzen 7 9700X & RX 7900 XT",
  },
  { 
    id: "thetaichi", 
    name: "The Taichi", 
    price: 2808.34, 
    description: "Ryzen 7 9800X3D & RX 7900 XTX",
  },
  { 
    id: "nitrous", 
    name: "Nitrous", 
    price: 2812.08, 
    description: "Ryzen 7 9800X3D & RX 7900 XTX",
  },
  { 
    id: "tuffy", 
    name: "Tuffy", 
    price: 2934.53, 
    description: "Ryzen 7 9800X3D & RTX 4070 Ti SUPER",
  },
  { 
    id: "chillguy", 
    name: "Chill Guy", 
    price: 3199.71, 
    description: "Ryzen 7 9800X3D & RX 7900 XTX",
  },
  { 
    id: "neonotte", 
    name: "Neo Notte", 
    price: 3239.44, 
    description: "Ryzen 7 9800X3D & RTX 4080 SUPER",
  },
  { 
    id: "themaster", 
    name: "The Master", 
    price: 3742.90, 
    description: "Ryzen 7 9800X3D & RTX 4080 SUPER",
  },
  { 
    id: "theoverkill", 
    name: "The Overkill", 
    price: 6167.62, 
    description: "Ryzen 9 9950X & RTX 4090",
  }
];

const PreBuiltPCs = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-12 py-2 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            PC Gaming préconfigurés
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
