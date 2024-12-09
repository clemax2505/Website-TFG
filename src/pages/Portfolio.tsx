import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectDialog } from "@/components/portfolio/ProjectDialog";
import { Project } from "@/components/portfolio/types";
import { useState } from "react";

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
              <ProjectCard 
                key={index}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </main>
        <Footer />

        <ProjectDialog 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </PageTransition>
  );
};

export default Portfolio;