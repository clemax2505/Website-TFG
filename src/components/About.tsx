
import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = memo(() => {
  return (
    <section className="py-16 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forge-orange">
            À Propos de The Gaming Forge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Étudiant passionné de 19 ans, expert en hardware gaming depuis 4 ans
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-forge-orange">Mon Parcours</h3>
              <p className="text-gray-300 mb-4">
                Passionné de technologie depuis mon adolescence, j'ai commencé à m'intéresser au hardware 
                il y a 4 ans. Depuis, j'ai réalisé plus de 10 montages de tous types, du PC gaming 
                budget au setup haut de gamme. Chaque projet est une nouvelle opportunité d'apprendre 
                et de perfectionner mes compétences.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• 4 ans d'expérience en hardware</li>
                <li>• Plus de 10 montages réalisés</li>
                <li>• Configurations gaming optimisées</li>
                <li>• Suivi personnalisé de chaque projet</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-forge-orange">Ma Philosophie</h3>
              <p className="text-gray-300 mb-4">
                Je crois que chaque gamer mérite une machine parfaitement adaptée à ses besoins. 
                Mon approche se base sur l'écoute, le conseil personnalisé et un assemblage 
                minutieux. Étant moi-même gamer, je comprends l'importance d'avoir un PC 
                performant et fiable.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Conseil personnalisé et à l'écoute</li>
                <li>• Sélection rigoureuse des composants</li>
                <li>• Assemblage soigné et testé</li>
                <li>• Prix transparents et accessibles</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
