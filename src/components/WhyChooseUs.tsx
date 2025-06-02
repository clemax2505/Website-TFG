
import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Award } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Approche Personnelle",
    description: "En tant que passionné, je prends le temps d'écouter vos besoins et de vous conseiller la configuration parfaite pour votre style de jeu."
  },
  {
    icon: Zap,
    title: "Expérience Pratique",
    description: "4 ans d'expérience et plus de 10 montages réalisés m'ont permis de maîtriser l'assemblage et l'optimisation de PC gaming."
  },
  {
    icon: Users,
    title: "Suivi Personnalisé",
    description: "Je vous accompagne personnellement tout au long du projet, du choix des composants à la livraison de votre PC gaming."
  },
  {
    icon: Award,
    title: "Passion Authentique",
    description: "Étant moi-même gamer, je comprends vos attentes et m'assure que votre PC soit parfaitement adapté à vos jeux favoris."
  }
];

const WhyChooseUs = memo(() => {
  return (
    <section className="py-16 px-4" id="avantages">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forge-orange">
            Pourquoi Choisir The Gaming Forge ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une approche personnelle et passionnée pour votre PC gaming idéal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <advantage.icon className="h-12 w-12 text-forge-orange mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3 text-white">{advantage.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';

export default WhyChooseUs;
