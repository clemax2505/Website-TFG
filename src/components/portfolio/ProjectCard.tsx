import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
      {'images' in project ? (
        <Carousel className="w-full relative">
          <CarouselContent>
            {project.images?.map((image, imageIndex) => (
              <CarouselItem key={imageIndex} className="flex items-center justify-center">
                <div className="aspect-[4/3] w-full relative">
                  <img
                    src={image}
                    alt={`${project.title} - Vue ${imageIndex + 1}`}
                    className="w-full h-full object-contain rounded-lg"
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
              <CarouselPrevious 
                className="relative -left-0 h-8 w-8 bg-black/50 hover:bg-black/70" 
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="pointer-events-auto">
              <CarouselNext 
                className="relative -right-0 h-8 w-8 bg-black/50 hover:bg-black/70" 
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </Carousel>
      ) : (
        <div className="aspect-[4/3] w-full relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain rounded-lg"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <p className="text-sm text-gray-700 dark:text-gray-400">{project.specs}</p>
      </CardHeader>
      <CardContent>
        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(project.review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-forge-orange text-forge-orange" />
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 italic">&quot;{project.review.comment}&quot;</p>
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">- {project.review.author}</p>
        </div>
      </CardContent>
    </Card>
  );
};