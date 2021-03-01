import {ICliCommandOptions} from "../../util";

export interface IGenerateArgs {
  config: string;
  outDir: string;
}

export const generateOptions: ICliCommandOptions<IGenerateArgs> = {
  config: {
    description: "Configuration file",
    alias: "c",
    normalize: true,
    demandOption: true,
    type: "string"
  },
  outDir: {
    description: "Directory where the generator will write to.",
    alias: "o",
    normalize: true,
    demandOption: true,
    type: "string"
  }
};