
import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Award } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Garantie & Fiabilité",
    description: "Tous nos PC gaming sont assemblés avec des composants premium et bénéficient d'une garantie complète pour votre tranquillité d'esprit."
  },
  {
    icon: Zap,
    title: "Performances Optimisées",
    description: "Chaque configuration est testée et optimisée pour garantir les meilleures performances gaming selon votre budget et vos jeux favoris."
  },
  {
    icon: Users,
    title: "Support Expert",
    description: "Notre équipe d'experts gaming vous accompagne avant, pendant et après votre achat avec un support technique personnalisé."
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Nous sélectionnons uniquement des composants de marques reconnues pour leur qualité et leur durabilité dans le gaming intensif."
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
            L'expertise et la passion du gaming au service de votre PC idéal
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
