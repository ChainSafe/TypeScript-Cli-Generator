import {ICliCommand} from "../../../../util";
import {IGlobalArgs} from "../../../../options";
import { ILoginArgs, loginOptions } from "./options";
import {loginHandler} from "./handler";

export const login: ICliCommand<Record<never, never>, ILoginArgs & IGlobalArgs > = {
  command: "login",
  
  describe: "Perform a magic trick",

  examples: [
    {
      // TODO: Change this!
      command: "",
      description: "",
    },
  ],

  options: loginOptions,
  
  handler: loginHandler  
};