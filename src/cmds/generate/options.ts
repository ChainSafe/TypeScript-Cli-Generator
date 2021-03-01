import {ICliCommandOptions} from "../../util";

export interface IGenerateArgs {
  config: string;
}

export const generateOptions: ICliCommandOptions<IGenerateArgs> = {
  config: {
    description: "Configuration file",
    alias: "c",
    normalize: true,
    demandOption: true,
    type: "string"
  },
};