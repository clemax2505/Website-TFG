import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { priceRanges } from "@/pages/PreBuiltPCs";
import ConfigHeader from "./ConfigHeader";
import ComponentsSection from "./ComponentsSection";
import PerformanceSection from "./PerformanceSection";
import OrderButton from "./OrderButton";
import { configComponents } from "./data/configComponents";
import { getImagesForConfig } from "./utils/imageMapping";

const PCConfigDetails = () => {
  const { configId } = useParams();
  const components = configComponents[configId || ""] || [];
  const images = getImagesForConfig(configId || "");
  const selectedConfig = priceRanges.find(config => config.id === configId);

  if (!selectedConfig) {
    return <div>Configuration non trouvée</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <ConfigHeader config={selectedConfig} />
        <ComponentsSection components={components} images={images} />
        <div className="flex justify-center">
          <OrderButton config={selectedConfig} components={components} />
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <PerformanceSection />
      </div>
    </div>
  );
};

export default PCConfigDetails;