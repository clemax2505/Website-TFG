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
      title: "Montage PC gaming",
      specs: "RTX 4070 super, i7 14700kf, 32GB RAM",
      image: [
        "/portfolio/guillaume/guillaume-front.png",
      ],
      review: {
        author: "Guillaume",
        rating: 5,
        comment: "Cable management au top, montage et assemblage vraiment parfait et conseils très pertinents ! Merci pour tout."
      }
    },
    {
      title: "Montage PC gaming",
      specs: "RTX 4060 ti, R5 7500f, 32GB RAM",
      image: "/portfolio/gloo/gloo.png",
      review: {
        author: "Gloo",
        rating: 5,
        comment: "Un excellent service, super bien réalisé et super réactif. Rien à dire c'était parfait avec pleins d'explications"
      }
    },
    {
      title: "Upgrade PC gaming",
      specs: "RTX 4060 ti, R5 7600X, 32GB RAM",
      images: [
        "/portfolio/cikay/cikay-front.png",
        "/portfolio/cikay/cikay-back.png"
      ],
      review: {
        author: "Cikay",
        rating: 5,
        comment: "Clément a fait un travail remarquable sur le montage de mon nouvel ordinateur. Il a été extrêmement efficace, rapide et surtout de très bon conseil pour choisir le matériel adapté à mes besoins. Je suis entièrement satisfait et je recommande vivement ses services. Merci encore !"
      }
    },
    {
      title: "Demontage remontage & cable management, changement pâte thermique et depoussierage, ajout d'un ssd et de 3 ventilateurs",
      specs: "RTX 4060, i5 10600, 16GB RAM",
      images: [
        "/portfolio/olivier/olivier-after.png",
        "/portfolio/olivier/olivier-before.png"
      ],
      review: {
        author: "Olivier",
        rating: 5,
        comment: "La compatibilté des éléments est vérifiée, cable management au top, merci beaucoup !"
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
