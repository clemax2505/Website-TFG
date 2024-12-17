import { Card, CardContent } from "@/components/ui/card";

interface PCComponentsListProps {
  components: string[];
}

const PCComponentsList = ({ components }: PCComponentsListProps) => {
  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Composants</h2>
        <ul className="space-y-4">
          {components.map((component, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-forge-orange"></div>
              <span>{component}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PCComponentsList;