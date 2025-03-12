export interface PCConfig {
  id: string;
  name: string;
  price: number;
  description: string;
  link?: string;
}

export interface PCPerformance {
  FPS_moyen: string;
}

export interface GamePerformance {
  fhd: PCPerformance;
  "2k": PCPerformance;
  "4k": PCPerformance;
}

export interface PCConfigDetailed extends PCConfig {
  components: string[];
  images: {
    cpu: string;
    gpu: string;
  };
  gamePerformance: {
    fortnite: GamePerformance;
    warzone: GamePerformance;
    minecraft: GamePerformance;
    valorant: GamePerformance;
    gta: GamePerformance;
  };
}