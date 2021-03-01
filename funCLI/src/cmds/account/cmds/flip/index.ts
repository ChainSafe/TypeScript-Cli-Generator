import {ICliCommand} from "../../../../util";
import {IGlobalArgs} from "../../../../options";
import { IFlipArgs, flipOptions } from "./options";
import {flipHandler} from "./handler";

export const flip: ICliCommand<Record<never, never>, IFlipArgs & IGlobalArgs > = {
  command: "flip",
  
  describe: "Perform a flip",

  examples: [
    {
      // TODO: Change this!
      command: "",
      description: "",
    },
  ],

  options: flipOptions,
  
  handler: flipHandler  
};