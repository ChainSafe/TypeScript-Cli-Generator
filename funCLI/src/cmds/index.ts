import {ICliCommand} from "../util";
import {IGlobalArgs} from "../options";
import {upload} from "./upload";
import {account} from "./account";

export const cmds: Required<ICliCommand<IGlobalArgs, Record<never, never>>>["subcommands"] = [    
    upload,     
    account,     
];