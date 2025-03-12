import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { PCConfigDetailed } from "@/data/types";

interface GamePerformanceProps {
  resolution: "FHD" | "2K" | "4K";
  config: PCConfigDetailed;
}

const GamePerformance = ({ resolution, config }: GamePerformanceProps) => {
  const games = [
    { id: 1, image: "/logos jeux/logo warzone.png", key: "warzone" },
    { id: 2, image: "/logos jeux/logo cyberpunk2077.png", key: "cyberpunk2077" },
    { id: 3, image: "/logos jeux/logo minecraft.png", key: "minecraft" },
    { id: 4, image: "/logos jeux/logo rdr2.png", key: "rdr2" },
    { id: 5, image: "/logos jeux/logo valorant.png", key: "valorant" },
  ];

  const getPerformanceData = (gameKey: string) => {
    const resolutionKey = resolution.toLowerCase() as "fhd" | "2k" | "4k";
    const gamePerf = config.gamePerformance[gameKey as keyof typeof config.gamePerformance];
    
    // Vérifiez d'abord si les données ultra sont disponibles pour cette résolution
    if (gamePerf.ultra[resolutionKey]?.FPS_moyen !== "--") {
      return gamePerf.ultra[resolutionKey];
    }
    
    // Sinon, retournez les données moyennes
    return gamePerf.moyen[resolutionKey === "2k" ? "4k" : resolutionKey];
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
                        <TableHead className="text-center w-1/4">FPS moyens</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-center">{performance?.FPS_moyen || "-"}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-xs text-gray-400 text-center">
          Sources: PC-Builds.com, TechPowerUp, Tom's Hardware, UserBenchmark, Gamers Nexus, Hardware Unboxed
        </div>
      </CardContent>
    </Card>
  );
};

export default GamePerformance;
