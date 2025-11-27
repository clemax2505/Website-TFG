
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { AlertCircle, Wrench, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const PreBuiltPCs = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
                PC Gaming Préconfigurés
              </h1>
              <div className="inline-block px-4 py-2 rounded-full bg-forge-orange/10 border border-forge-orange/20">
                <span className="text-forge-orange font-semibold">Temporairement indisponible</span>
              </div>
            </div>

            {/* Main Notice Card */}
            <div className="glass-card p-8 mb-8 border-2 border-forge-orange/20">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-forge-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Mise en pause des configurations préconfigurées</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    En raison de la forte volatilité des prix des composants (notamment la RAM qui a récemment explosé), 
                    j'ai décidé de mettre en pause les configurations préconfigurées. Les prix fluctuent tellement qu'il 
                    est devenu impossible de maintenir des configurations à jour et compétitives.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Pour obtenir le meilleur rapport qualité/prix adapté à votre budget et vos besoins, 
                    je vous recommande de <span className="text-foreground font-semibold">demander un devis personnalisé</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Custom Quote CTA */}
              <div className="glass-card p-6 border border-border hover:border-forge-orange/50 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forge-orange to-forge-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Devis sur mesure</h3>
                  <p className="text-muted-foreground mb-6">
                    Une configuration personnalisée selon votre budget et vos besoins, avec les meilleurs prix du moment.
                  </p>
                  <Button asChild className="w-full bg-gradient-to-r from-forge-orange to-forge-red hover:opacity-90">
                    <Link to="/quote">Demander un devis gratuit</Link>
                  </Button>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="glass-card p-6 border border-border hover:border-forge-orange/50 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forge-orange to-forge-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Besoin de conseils ?</h3>
                  <p className="text-muted-foreground mb-6">
                    N'hésitez pas à me contacter pour discuter de votre projet et obtenir des recommandations personnalisées.
                  </p>
                  <Button asChild variant="outline" className="w-full border-forge-orange/30 hover:bg-forge-orange/10">
                    <Link to="/contact">Me contacter</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="text-center">
              <p className="text-muted-foreground text-lg mb-4">
                Découvrez également mes autres services :
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="lg" className="border-border hover:border-forge-orange/50">
                  <Link to="/pc-assembly">Montage PC</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:border-forge-orange/50">
                  <Link to="/upgrade">Amélioration PC</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:border-forge-orange/50">
                  <Link to="/maintenance">Maintenance</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:border-forge-orange/50">
                  <Link to="/portfolio">Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PreBuiltPCs;
