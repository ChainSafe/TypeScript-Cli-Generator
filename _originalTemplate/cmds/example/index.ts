import {ICliCommand} from "../../util";
import {IGlobalArgs} from "../../options";
import {helloWorld} from "./cmds/helloWorld";

export const example: ICliCommand<Record<never, never>, IGlobalArgs> = {
  command: "example <command>",
  describe: "An example description",
  subcommands: [helloWorld],
};