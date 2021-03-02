import {ICliCommand} from "../../util";
import {IGlobalArgs} from "../../options";
import { IConfigArgs, configOptions } from "./options";
import {configHandler} from "./handler";
// export type ReturnType = string;

export const config: ICliCommand<Record<never, never>, IConfigArgs & IGlobalArgs > = {
  command: "config",
  
  describe: "Creates an empty configuration file.",

  examples: [
    {
      command: "config -o ./config.json",
      description: "Creates an empty configuration file.",
    },
  ],

  options: configOptions,

  handler: configHandler
};