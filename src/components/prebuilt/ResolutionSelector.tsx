import { Button } from "@/components/ui/button";

interface ResolutionSelectorProps {
  selectedResolution: "FHD" | "2K" | "4K";
  onResolutionChange: (resolution: "FHD" | "2K" | "4K") => void;
}

const ResolutionSelector = ({
  selectedResolution,
  onResolutionChange,
}: ResolutionSelectorProps) => {
  const resolutions: ("FHD" | "2K" | "4K")[] = ["FHD", "2K", "4K"];

  return (
    <div className="flex justify-center gap-4 mb-8">
      {resolutions.map((resolution) => (
        <Button
          key={resolution}
          variant={selectedResolution === resolution ? "default" : "outline"}
          onClick={() => onResolutionChange(resolution)}
          className={selectedResolution === resolution ? "bg-forge-orange" : ""}
        >
          {resolution}
        </Button>
      ))}
    </div>
  );
};

export default ResolutionSelector;