 
import {ICliCommand} from "../util";
import {IGlobalArgs} from "../options";
import {example} from "./example";

export const cmds: Required<ICliCommand<IGlobalArgs, Record<never, never>>>["subcommands"] = [
    // TODO: change this!
    /**
     * A note about this the ./cmds directory.
     * Pretty much everything here on out needs to be changed, please us the `example` command
     * as a reference guide!
     */
    example
];