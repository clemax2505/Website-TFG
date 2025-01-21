import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Project } from "./types";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] bg-forge-dark p-0 sm:p-6 max-h-[90vh] overflow-hidden">
        <ScrollArea className="h-full max-h-[90vh]">
          <DialogHeader className="p-6">
            <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
            <p className="text-white">{project.specs}</p>
          </DialogHeader>
          
          {'images' in project ? (
            <Carousel className="w-full relative">
              <CarouselContent>
                {project.images?.map((image, imageIndex) => (
                  <CarouselItem key={imageIndex} className="flex items-center justify-center">
                    <div className="aspect-[4/3] w-full relative p-4">
                      <img
                        src={image}
                        alt={`${project.title} - Vue ${imageIndex + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-y-1/4 inset-x-0 flex items-center justify-between px-4">
                <CarouselPrevious className="relative -left-0 h-8 w-8 bg-black/50 hover:bg-black/70" />
                <CarouselNext className="relative -right-0 h-8 w-8 bg-black/50 hover:bg-black/70" />
              </div>
            </Carousel>
          ) : project.image && (
            <div className="aspect-[4/3] w-full relative p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
          )}

          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(project.review.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-forge-orange text-forge-orange" />
              ))}
            </div>
            <p className="text-white italic text-lg">&quot;{project.review.comment}&quot;</p>
            <p className="text-white mt-2">- {project.review.author}<br></br><br></br></p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};