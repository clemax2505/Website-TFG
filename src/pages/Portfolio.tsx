import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "PC Gaming Haute Performance",
      specs: "RTX 4080, i9-13900K, 32GB RAM",
      image: "photo-1488590528505-98d2b5aba04b",
      review: {
        author: "Thomas M.",
        rating: 5,
        comment: "Configuration exceptionnelle, performances au rendez-vous !"
      }
    },
    {
      title: "Setup Streaming Pro",
      specs: "RTX 4070, Ryzen 9 7900X, 64GB RAM",
      image: "photo-1461749280684-dccba630e2f6",
      review: {
        author: "Sarah L.",
        rating: 5,
        comment: "Parfait pour mes sessions de streaming, aucune latence !"
      }
    },
    {
      title: "PC Portable Gaming",
      specs: "RTX 4060, i7-13700H, 32GB RAM",
      image: "photo-1518770660439-4636190af475",
      review: {
        author: "Marc D.",
        rating: 5,
        comment: "Excellent rapport performance/mobilité"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h1>
        <h2>Le site aillant été mis en ligne le samedi 23 novembre, ces avis sont faux. <br></br>Cependant, tout le reste du site est factuelle !</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
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
  );
};

export default Portfolio;
