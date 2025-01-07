import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface GamePerformanceProps {
  resolution: "FHD" | "2K" | "4K";
}

const GamePerformance = ({ resolution }: GamePerformanceProps) => {
  const games = [
    { id: 1, name: "/logo fortnite.png" },
    { id: 2, name: "/logo Warzone.png" },
    { id: 3, name: "/logo minecraft.png" },
    { id: 4, name: "/logo valorant.png" },
    { id: 5, name: "/logo gta v.png" },
  ];

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="mb-4 text-center">
          <span className="text-lg font-semibold text-forge-orange">
            Performance en {resolution}
          </span>
        </div>
        <div className="space-y-6">
          {games.map((game) => (
            <div key={game.id} className="flex gap-4 items-center">
              <div className="w-32 h-20 bg-forge-dark rounded-lg flex items-center justify-center">
                {game.name}
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Ultra</TableHead>
                    <TableHead className="text-center">Haut</TableHead>
                    <TableHead className="text-center">Moyen</TableHead>
                    <TableHead className="text-center">Bas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GamePerformance;
