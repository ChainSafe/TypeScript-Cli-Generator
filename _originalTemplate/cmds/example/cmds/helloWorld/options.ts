import {ICliCommandOptions} from "../../../../util";

export interface IListArgs {
    number?: number;
}

export const listOptions: ICliCommandOptions<IListArgs> = {
    number: {
        description: "Number of addresses to show.",
        default: 10,
        normalize: true,
        type: "string",
    },
};