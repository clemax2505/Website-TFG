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
    moyen : {
      fhd: PCPerformance;
      "2k": PCPerformance;
      "4k": PCPerformance;
}
    ultra : {
     fhd: PCPerformance;
     "2k": PCPerformance;
     "4k": PCPerformance;
     }
}

export interface PCConfigDetailed extends PCConfig {
  components: string[];
  images: {
    cpu: string;
    gpu: string;
    case: string;
  };
  gamePerformance: {
    warzone: GamePerformance;
    cyberpunk2077: GamePerformance;
    minecraft: GamePerformance;
    rdr2: GamePerformance;
    valorant: GamePerformance;
  };
}
