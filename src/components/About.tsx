
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
            Experts passionnés en création de PC gaming sur mesure depuis plus de 5 ans
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-forge-orange">Notre Expertise</h3>
              <p className="text-gray-300 mb-4">
                Chez The Gaming Forge, nous sommes spécialisés dans l'assemblage PC gaming haut de gamme, 
                l'optimisation de configurations existantes et la maintenance professionnelle. 
                Notre équipe d'experts sélectionne minutieusement chaque composant pour garantir 
                des performances gaming optimales.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Assemblage PC gaming personnalisé</li>
                <li>• Upgrade et amélioration de composants</li>
                <li>• Maintenance et nettoyage professionnel</li>
                <li>• Support technique spécialisé</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-forge-orange">Nos Valeurs</h3>
              <p className="text-gray-300 mb-4">
                La passion du gaming nous anime. Nous croyons que chaque joueur mérite une machine 
                parfaitement adaptée à ses besoins et son budget. Notre approche personnalisée 
                garantit satisfaction et performances exceptionnelles.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Conseil personnalisé gratuit</li>
                <li>• Composants de marques premium</li>
                <li>• Garantie et support après-vente</li>
                <li>• Prix transparents et compétitifs</li>
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
