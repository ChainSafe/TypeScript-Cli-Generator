import {ICliCommand} from "../../util";
import {IGlobalArgs} from "../../options";
import { IGenerateArgs, generateOptions } from "./options";
import {handler} from "./handler";
// export type ReturnType = string;

export const generate: ICliCommand<Record<never, never>, IGenerateArgs & IGlobalArgs > = {
  command: "generate",
  
  describe: "Generates the CLI from a template.",

  examples: [
    {
      command: "generate --config ./config.json",
      description: "Generates the CLI template",
    },
  ],

  options: generateOptions,

  handler: handler
};