import {ICliCommandOptions} from "../../util";

export interface IConfigArgs {
  out: string;
}

export const configOptions: ICliCommandOptions<IConfigArgs> = {
  out: {
    description: "File where the config file will be written to.",
    alias: "o",
    normalize: true,
    demandOption: false,
    default: "config.json",
    type: "string"
  }
};
