import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <Card 
      className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative">
        {'images' in project ? (
          <>
            <div className="aspect-[4/3] w-full relative">
              <img
                src={project.images?.[0]}
                alt={`${project.title} - Vue 1`}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
            {project.images && project.images.length > 1 && (
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                +{project.images.length - 1}
              </div>
            )}
          </>
        ) : (
          <div className="aspect-[4/3] w-full relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
        <p className="text-sm text-white">{project.specs}</p>
      </CardHeader>
      <CardContent>
        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(project.review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-forge-orange text-forge-orange" />
            ))}
          </div>
          <p className="text-white italic">&quot;{project.review.comment}&quot;</p>
          <p className="text-sm text-white mt-2">- {project.review.author}</p>
        </div>
      </CardContent>
    </Card>
  );
};