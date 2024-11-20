import { ArrowRight, Flame, Tool, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute inset-0 bg-forge-orange blur-3xl animate-lava" 
               style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Flame className="h-12 w-12 text-forge-orange animate-lava" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            Forgez Votre PC Gaming Idéal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Création sur mesure, amélioration et maintenance de PC gaming par des experts passionnés
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/quote" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 bg-forge-orange hover:bg-forge-red text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                Obtenir un devis
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/contact" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 bg-forge-dark hover:bg-forge-metal text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                Nous contacter
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-lg">
              <Monitor className="h-8 w-8 text-forge-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">PC Sur Mesure</h3>
              <p className="text-gray-400">Configuration personnalisée selon vos besoins et votre budget</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <Tool className="h-8 w-8 text-forge-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Amélioration</h3>
              <p className="text-gray-400">Optimisation de votre configuration existante</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <Flame className="h-8 w-8 text-forge-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Maintenance</h3>
              <p className="text-gray-400">Nettoyage et entretien professionnel de votre machine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;