
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import QuoteForm from "@/components/quote/QuoteForm";

const Quote = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
          PC Gaming Sur Mesure<br></br><br></br>
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Créez votre configuration gaming idéale avec l'aide d'un expert. Vous préférez une solution clé en main ? Découvrez mes <Link to="/prebuilt" className="text-forge-orange hover:text-forge-red underline">PC pré-configurés</Link> ou consultez mes autres <Link to="/services" className="text-forge-orange hover:text-forge-red underline">services</Link>.
        </p>
        <Card className="glass-card w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Configurez votre projet</CardTitle>
          </CardHeader>
          <CardContent>
            <QuoteForm />
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Besoin d'inspiration ? Consultez mon <Link to="/portfolio" className="text-forge-orange hover:text-forge-red underline">portfolio</Link> pour voir mes réalisations précédentes ou mes <Link to="/prebuilt" className="text-forge-orange hover:text-forge-red underline">configurations recommandées</Link>.
          </p>
          <p className="text-gray-400">
            Questions sur le processus ? Consultez ma <Link to="/#faq" className="text-forge-orange hover:text-forge-red underline">FAQ</Link> ou <Link to="/contact" className="text-forge-orange hover:text-forge-red underline">contactez-moi</Link> directement.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
