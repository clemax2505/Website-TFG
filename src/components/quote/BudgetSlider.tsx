import { Slider } from "@/components/ui/slider";

interface BudgetSliderProps {
  budget: number[];
  setBudget: (value: number[]) => void;
}

const BudgetSlider = ({ budget, setBudget }: BudgetSliderProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Budget approximatif (€)</label>
      <Slider
        value={budget}
        onValueChange={setBudget}
        max={5000}
        min={500}
        step={100}
        className="py-4"
      />
      <p className="text-right text-forge-orange font-semibold">{budget[0]}€</p>
    </div>
  );
};

export default BudgetSlider;