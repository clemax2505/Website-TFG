import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PCConfigDetailsProps {
  configId: string;
}

const PCConfigDetails = ({ configId }: PCConfigDetailsProps) => {
  const components = [
    "Processeur (CPU)",
    "Carte Graphique (GPU)",
    "Carte Mère",
    "Mémoire RAM",
    "Stockage SSD",
    "Stockage HDD",
    "Alimentation",
    "Boîtier",
    "Ventilateurs",
    "Refroidissement CPU"
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Composants</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {components.map((component, index) => (
            <li key={index} className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-forge-orange">{component}</span>
              <span className="text-gray-400">À définir</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PCConfigDetails;