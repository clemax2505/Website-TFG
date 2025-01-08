import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface GamePerformanceProps {
  resolution: "FHD" | "2K" | "4K";
}

const GamePerformance = ({ resolution }: GamePerformanceProps) => {
  const games = [
    { id: 1, image: "/logo fortnite.png" },
    { id: 2, image: "/logo Warzone.png" },
    { id: 3, image: "/logo minecraft.png" },
    { id: 4, image: "/logo valorant.png" },
    { id: 5, image: "/logo gta v.png" },
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
              <div className="w-32 h-20 bg-forge-dark rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={game.image} 
                  alt="Game logo" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex-grow">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center w-1/4">Ultra</TableHead>
                      <TableHead className="text-center w-1/4">Haut</TableHead>
                      <TableHead className="text-center w-1/4">Moyen</TableHead>
                      <TableHead className="text-center w-1/4">Bas</TableHead>
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GamePerformance;