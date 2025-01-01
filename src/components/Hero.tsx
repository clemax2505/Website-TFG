import { ArrowRight, Settings, Monitor, Laptop, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
      description: "Configuration personnalisée selon vos besoins"
    },
    {
      to: "/upgrade",
      icon: Monitor,
      title: "Amélioration",
      description: "Optimisation de votre configuration"
    },
    {
      to: "/maintenance",
      icon: Settings,
      title: "Maintenance",
      description: "Nettoyage et entretien professionnel"
    },
    {
      to: "/pc-assembly",
      icon: Wrench,
      title: "Montage PC",
      description: "Service professionnel de montage"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center">
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
        <div className="text-center mt-16 md:mt-0">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            <br></br><br></br>Forgez Votre PC Gaming Idéal !<br></br><br></br>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Création sur mesure, amélioration et maintenance de PC gaming par des experts passionnés
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/custom-pc" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 bg-forge-orange hover:bg-forge-red text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                PC Gaming Sur Mesure
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/contact" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 bg-forge-dark hover:bg-forge-metal text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                Nous contacter
              </button>
            </Link>
          </div>
          <br></br>
          <div className="container mx-auto px-4 py-10">
            <Link to="/prebuilt">
              <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-forge-orange mb-4">PC Pré-configurés</h2>
                  <p className="text-gray-400">Découvrez notre sélection de PC gaming optimisés pour tous les budgets</p>
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
  );
});

Hero.displayName = 'Hero';

export default Hero;