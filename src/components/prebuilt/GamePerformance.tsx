import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { PCConfigDetailed } from "@/data/prebuiltConfigs";

interface GamePerformanceProps {
  resolution: "FHD" | "2K" | "4K";
  config: PCConfigDetailed;
}

const GamePerformance = ({ resolution, config }: GamePerformanceProps) => {
  const games = [
    { id: 1, image: "/logo fortnite.png", key: "fortnite" },
    { id: 2, image: "/logo Warzone.png", key: "warzone" },
    { id: 3, image: "/logo minecraft.png", key: "minecraft" },
    { id: 4, image: "/logo valorant.png", key: "valorant" },
    { id: 5, image: "/logo gta v.png", key: "gta" },
  ];

  const getPerformanceData = (gameKey: string) => {
    const resolutionKey = resolution.toLowerCase() === "fhd" ? "fhd" : resolution.toLowerCase() as "2k" | "4k";
    return config.gamePerformance[gameKey as keyof typeof config.gamePerformance][resolutionKey];
  };

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="mb-4 text-center">
          <span className="text-lg font-semibold text-forge-orange">
            Performance en {resolution}
          </span>
        </div>
        <div className="space-y-6">
          {games.map((game) => {
            const performance = getPerformanceData(game.key);
            return (
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
                        <TableCell className="text-center">{performance.ultra || "-"}</TableCell>
                        <TableCell className="text-center">{performance.high || "-"}</TableCell>
                        <TableCell className="text-center">{performance.medium || "-"}</TableCell>
                        <TableCell className="text-center">{performance.low || "-"}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GamePerformance;