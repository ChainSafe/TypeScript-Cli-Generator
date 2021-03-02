import {ICliCommand} from "../util";
import {IGlobalArgs} from "../options";
import {generate} from "./generate";
import {config} from "./config";

export const cmds: Required<ICliCommand<IGlobalArgs, Record<never, never>>>["subcommands"] = [
    generate,
    config
];