interface ConfigImages {
  cpu: string;
  gpu: string;
}

export const getImagesForConfig = (configId: string): ConfigImages => {
  switch (configId) {
    case "budget1":
      return {
        cpu: "/pc-parts/R5 5600.png",
        gpu: "/pc-parts/6650XT.png"
      };
    case "budget2":
      return {
        cpu: "/pc-parts/R5 5600.png",
        gpu: "/pc-parts/6750XT.png"
      };
    case "mid1":
      return {
        cpu: "/pc-parts/R5 5600.png",
        gpu: "/pc-parts/4060 EAGLE 3X.png"
      };
    case "mid2":
      return {
        cpu: "/pc-parts/R7 5800X.png",
        gpu: "/pc-parts/7700XT GIGABYTE GAMING OC.png"
      };
    case "high1":
      return {
        cpu: "/pc-parts/i5-14600KF.png",
        gpu: "/pc-parts/7800XT POWERCOLOR HELLBOUND.png"
      };
    case "high2":
      return {
        cpu: "/pc-parts/i5-14600KF.png",
        gpu: "/pc-parts/4070 SUPER TWIN EDGE ZOTAC.png"
      };
    case "extreme1":
      return {
        cpu: "/pc-parts/i7-14700KF.png",
        gpu: "/pc-parts/4070 Ti SUPER PNY EPIC-X RGB.png"
      };
    case "extreme2":
      return {
        cpu: "/pc-parts/R7 7800X3D.png",
        gpu: "/pc-parts/7900XTX TAICHI.png"
      };
    case "extreme3":
      return {
        cpu: "/pc-parts/i9-14900KF.png",
        gpu: "/pc-parts/4080 SUPER PNY EPIC-X RGB.png"
      };
    case "extreme4":
      return {
        cpu: "/pc-parts/R7 9800X3D.png",
        gpu: "/pc-parts/7900XTX TAICHI.png"
      };
    case "extreme5":
      return {
        cpu: "/pc-parts/R7 9800X3D.png",
        gpu: "/pc-parts/4080 SUPER MSI GAMING X SLIM.png"
      };
    default:
      return {
        cpu: "/placeholder.svg",
        gpu: "/placeholder.svg"
      };
  }
};