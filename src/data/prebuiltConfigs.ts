
import { PCConfigDetailed } from "@/data/types";
import { getConfigsAsObject } from "@/data/allPrebuiltConfigs";

export const prebuiltConfigs: { [key: string]: PCConfigDetailed } = getConfigsAsObject();
