import { Card, CardContent } from "@/components/ui/card";

interface ComponentsSectionProps {
  components: string[];
  images: {
    cpu: string;
    gpu: string;
  };
}

const ComponentsSection = ({ components, images }: ComponentsSectionProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <img
              src={images.cpu}
              alt="CPU"
              className="w-full h-48 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              Processeur
            </div>
          </div>
          <div className="relative">
            <img
              src={images.gpu}
              alt="GPU"
              className="w-full h-48 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              Carte graphique
            </div>
          </div>
        </div>
        <ul className="space-y-2">
          {components.map((component, index) => (
            <li key={index} className="text-gray-200">{component}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ComponentsSection;