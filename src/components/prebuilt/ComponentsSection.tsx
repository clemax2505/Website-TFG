import { Card, CardContent } from "@/components/ui/card";
import PCComponentsList from "./PCComponentsList";

interface ComponentsSectionProps {
  components: string[];
  images: {
    cpu: string;
    gpu: string;
  };
}

const ComponentsSection = ({ components, images }: ComponentsSectionProps) => {
  return (
    <div className="space-y-8">
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <img
                src={images.cpu}
                alt="CPU"
                className="w-full h-48 object-contain"
              />
              <p className="text-center text-sm">Processeur</p>
            </div>
            <div className="space-y-2">
              <img
                src={images.gpu}
                alt="GPU"
                className="w-full h-48 object-contain"
              />
              <p className="text-center text-sm">Carte graphique</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <PCComponentsList components={components} />
    </div>
  );
};

export default ComponentsSection;