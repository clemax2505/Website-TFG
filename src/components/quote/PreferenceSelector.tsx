import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface PreferenceSelectorProps {
  preference: string;
  setPreference: (value: string) => void;
}

const PreferenceSelector = ({ preference, setPreference }: PreferenceSelectorProps) => {
  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">Préférence GPU/CPU</label>
      <RadioGroup value={preference} onValueChange={setPreference} className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="nvidia-intel" id="nvidia-intel" />
          <Label htmlFor="nvidia-intel">Nvidia + Intel</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="nvidia-amd" id="nvidia-amd" />
          <Label htmlFor="nvidia-amd">Nvidia + AMD</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="amd-intel" id="amd-intel" />
          <Label htmlFor="amd-intel">AMD + Intel</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="amd-amd" id="amd-amd" />
          <Label htmlFor="amd-amd">AMD + AMD</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="intel-intel" id="intel-intel" />
          <Label htmlFor="intel-intel">Intel + Intel</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="intel-amd" id="intel-amd" />
          <Label htmlFor="intel-amd">Intel + AMD</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Pas de préférence" id="Pas de prédérence" />
          <Label htmlFor="intel-amd">Pas de préférence</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PreferenceSelector;