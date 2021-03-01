import {ICliCommandOptions} from "../util";

export interface IGlobalArgs {
  exampleHello: string;
}

// TODO: change this!
export const globalOptions: ICliCommandOptions<IGlobalArgs> = {
  exampleHello: {
    description: "Override default hello world string",
    normalize: true,
    default: "Hello world!",
    type: "string",
  },
};