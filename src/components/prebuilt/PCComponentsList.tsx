import { Card, CardContent } from "@/components/ui/card";

interface PCComponentsListProps {
  components: string[];
}

const PCComponentsList = ({ components }: PCComponentsListProps) => {
  return (
    <Card className="glass-card w-full">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Composants</h2>
        <ul className="space-y-4">
          {components.map((component, index) => (
            <li key={index} className="flex items-center gap-6">
              <div className="h-2 w-2 rounded-full bg-forge-orange shrink-0"></div>
              <span className="text-gray-700 dark:text-gray-300">{component}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PCComponentsList;