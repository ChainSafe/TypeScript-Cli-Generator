import {ICliCommand} from "../../../../util";
import {IGlobalArgs} from "../../../../options";
import { IListArgs } from "./options";

export type ReturnType = string;

export const helloWorld: ICliCommand<Record<never, never>, IListArgs & IGlobalArgs, ReturnType> = {
  command: "hello",

  describe: "Logs words to the screen.",

  examples: [
    {
      command: "example hello --msg 'hello world!'",
      description: "Prints the words to screen!",
    },
  ],

  options: {
    msg: {
      description:
        "Optional flag that overrides the message.",
      alias: ["n"],
      demandOption: false,
      type: "string",
    }
  },

  handler: async (args: any) => {
    const message = args.msg ? args.msg : args.exampleHello;  
    console.log(message);
    return message;
  }
};