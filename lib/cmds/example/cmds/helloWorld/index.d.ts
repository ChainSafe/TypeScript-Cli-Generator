import { ICliCommand } from "../../../../util";
import { IGlobalArgs } from "../../../../options";
import { IListArgs } from "./options";
export declare type ReturnType = string;
export declare const helloWorld: ICliCommand<Record<never, never>, IListArgs & IGlobalArgs, ReturnType>;
