import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface OSSelectorProps {
  os: string;
  setOs: (value: string) => void;
  customOs: string;
  setCustomOs: (value: string) => void;
}

const OSSelector = ({ os, setOs, customOs, setCustomOs }: OSSelectorProps) => {
  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">Système d'exploitation</label>
      <RadioGroup value={os} onValueChange={setOs} className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="windows10" id="windows10" />
          <Label htmlFor="windows10">Windows 10</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="windows11" id="windows11" />
          <Label htmlFor="windows11">Windows 11</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="other" id="other" />
          <Label htmlFor="other">Autre</Label>
        </div>
      </RadioGroup>
      {os === "other" && (
        <Input
          placeholder="Précisez votre système d'exploitation"
          value={customOs}
          onChange={(e) => setCustomOs(e.target.value)}
          className="mt-2"
          required
        />
      )}
    </div>
  );
};

export default OSSelector;