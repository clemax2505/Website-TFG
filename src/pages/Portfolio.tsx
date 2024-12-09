import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, X } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

interface Review {
  author: string;
  rating: number;
  comment: string;
}

interface Project {
  title: string;
  specs: string;
  image?: string;
  images?: string[];
  review: Review;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "PC Gaming",
      specs: "RTX 4060 ti, R5 7500f, 32GB RAM",
      image: "/lovable-uploads/63f481a5-f036-45d7-81ab-201926c66c18.png",
      review: {
        author: "Gloo",
        rating: 5,
        comment: "Un excellent service, super bien réalisé et super réactif. Rien à dire c'était parfait avec pleins d'explications"
      }
    },
    {
      title: "PC Gaming Corsair",
      specs: "RTX 4060, R5 7600, 32GB RAM",
      images: [
        "/lovable-uploads/0301cec7-80eb-45f4-9b27-d47e1986a569.png",
        "/lovable-uploads/6149801e-76d3-46ae-bd81-20fb45fce259.png"
      ],
      review: {
        author: "Alex",
        rating: 5,
        comment: "Montage impeccable, cable management parfait. Le PC est silencieux et performant, exactement ce que je recherchais !"
      }
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            Nos Réalisations
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {'images' in project ? (
                  <Carousel className="w-full relative">
                    <CarouselContent>
                      {project.images?.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex} className="flex items-center justify-center">
                          <div className="aspect-[4/3] w-full relative">
                            <img
                              src={image}
                              alt={`${project.title} - Vue ${imageIndex + 1}`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
                      <div className="pointer-events-auto">
                        <CarouselPrevious className="relative -left-0 h-8 w-8 bg-black/50 hover:bg-black/70" />
                      </div>
                      <div className="pointer-events-auto">
                        <CarouselNext className="relative -right-0 h-8 w-8 bg-black/50 hover:bg-black/70" />
                      </div>
                    </div>
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] w-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                )}
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

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-4xl w-[95vw] bg-forge-dark p-0 sm:p-6">
              <DialogHeader className="p-6 relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <p className="text-gray-400">{selectedProject.specs}</p>
              </DialogHeader>
              
              {'images' in selectedProject ? (
                <Carousel className="w-full relative">
                  <CarouselContent>
                    {selectedProject.images?.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="flex items-center justify-center">
                        <div className="aspect-[4/3] w-full relative p-4">
                          <img
                            src={image}
                            alt={`${selectedProject.title} - Vue ${imageIndex + 1}`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                    <div className="pointer-events-auto">
                      <CarouselPrevious className="relative -left-0 h-8 w-8 bg-black/50 hover:bg-black/70" />
                    </div>
                    <div className="pointer-events-auto">
                      <CarouselNext className="relative -right-0 h-8 w-8 bg-black/50 hover:bg-black/70" />
                    </div>
                  </div>
                </Carousel>
              ) : selectedProject.image && (
                <div className="aspect-[4/3] w-full relative p-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(selectedProject.review.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-forge-orange text-forge-orange" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-lg">&quot;{selectedProject.review.comment}&quot;</p>
                <p className="text-gray-400 mt-2">- {selectedProject.review.author}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default Portfolio;