import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import GlooImage from '@/pages/Gloo.png';

const Portfolio = () => {
  const projects = [
    {
      title: "PC Gaming",
      specs: "RTX 4060 ti, R5 7500f, 32GB RAM",
      image: GlooImage,
      review: {
        author: "Gloo",
        rating: 5,
        comment: "Un excellent service, super bien réalisé et super réactif. Rien à dire c'était parfait avec pleins d'explications"
      }
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Nos Réalisations</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-gray-400">{project.specs}</p>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(project.review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-forge-orange text-forge-orange" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">&quot;{project.review.comment}&quot;</p>
                    <p className="text-sm text-gray-400 mt-2">- {project.review.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Portfolio;