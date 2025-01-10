import { PCConfigDetailed } from "./types";
import { theBeginning } from "./configs/theBeginning";
import { littleGuy } from "./configs/littleGuy";
import { viper } from "./configs/viper";
import { airflowPrime } from "./configs/airflowPrime";
import { theHellbound } from "./configs/theHellbound";
import { infinity } from "./configs/infinity";
import { tuffy } from "./configs/tuffy";
import { theTaichi } from "./configs/theTaichi";
import { chillGuy } from "./configs/chillGuy";
import { theMaster } from "./configs/theMaster";
import { theOverkill } from "./configs/theOverkill";

export const prebuiltConfigs: { [key: string]: PCConfigDetailed } = {
  thebeginning: theBeginning,
  littleguy: littleGuy,
  viper: viper,
  airflowprime: airflowPrime,
  thehellbound: theHellbound,
  infinity: infinity,
  tuffy: tuffy,
  thetaichi: theTaichi,
  chillguy: chillGuy,
  themaster: theMaster,
  theoverkill: theOverkill
};