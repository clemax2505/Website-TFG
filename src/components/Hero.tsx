
import { ArrowRight, Settings, Monitor, Laptop, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "./Logo";

const ServiceCard = memo(({ to, icon: Icon, title, description }: {
  to: string;
  icon: typeof Settings;
  title: string;
  description: string;
}) => (
  <Link to={to} className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
    <Icon className="h-8 w-8 text-forge-orange mx-auto mb-4" />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </Link>
));

const Hero = memo(() => {
  const services = [
    {
      to: "/laptop-service",
      icon: Laptop,
      title: "PC Portable Gaming",
      description: "Diagnostic et optimisation personnalisés"
    },
    {
      to: "/upgrade",
      icon: Monitor,
      title: "Amélioration",
      description: "Upgrade de votre configuration actuelle"
    },
    {
      to: "/maintenance",
      icon: Settings,
      title: "Maintenance",
      description: "Nettoyage et entretien complet"
    },
    {
      to: "/pc-assembly",
      icon: Wrench,
      title: "Montage PC",
      description: "Assemblage soigné et professionnel"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Logo fixe en dessous du header */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 pt-4">
        <Logo className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40" />
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-person-assembling-a-computer-2584/1080p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center pt-24 md:pt-32">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
              <br></br><br></br>Assemblage PC Gaming Sur Mesure<br></br><br></br>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
              <strong>The Gaming Forge</strong> - Passionné de hardware depuis 4 ans avec plus de 10 montages réalisés. 
              Je crée votre PC gaming idéal, adapté à votre budget et à vos jeux favoris. Découvrez mes <Link to="/portfolio" className="text-forge-orange hover:text-forge-red underline">réalisations précédentes</Link> et mes <Link to="/services" className="text-forge-orange hover:text-forge-red underline">services spécialisés</Link>.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Assemblage minutieux • Composants sélectionnés • Conseils personnalisés • Passion du gaming • <Link to="/maintenance" className="text-forge-orange hover:text-forge-red underline">Maintenance professionnelle</Link>
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/quote" className="w-full md:w-auto">
                <button className="w-full md:w-auto px-8 py-4 bg-forge-orange hover:bg-forge-red text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                  PC Gaming Sur Mesure
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link to="/contact" className="w-full md:w-auto">
                <button className="w-full md:w-auto px-8 py-4 bg-forge-dark hover:bg-forge-metal text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                  Devis Gratuit
                </button>
              </Link>
            </div>
            <br></br>
            <div className="container mx-auto px-4 py-10">
              <Link to="/prebuilt">
                <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-2xl font-bold text-forge-orange mb-4">PC Gaming Pré-configurés</h2>
                    <p className="text-gray-400">Découvrez ma sélection de configurations gaming optimisées - Du gaming occasionnel au très haut de gamme. Besoin d'aide pour choisir ? <Link to="/contact" className="text-forge-orange hover:text-forge-red underline">Contactez-moi</Link> pour des conseils personnalisés.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
              {services.map((service) => (
                <ServiceCard key={service.to} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
