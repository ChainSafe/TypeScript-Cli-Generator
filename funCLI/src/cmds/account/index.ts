import {ICliCommand} from "../../util";
import {IGlobalArgs} from "../../options";
import { IAccountArgs, accountOptions } from "./options";
import {accountHandler} from "./handler";
import {Login} from "./cmds/Login";
import {Flip} from "./cmds/Flip";

export const account: ICliCommand<Record<never, never>, IAccountArgs & IGlobalArgs > = {
  command: "account",
  
  describe: "Account commands",

  examples: [
    {
      // TODO: Change this!
      command: "",
      description: "",
    },
  ],

  options: accountOptions,
  
  subCommands: [Login,Flip]
  
};