import {ICliCommandOptions} from "../../../../util";

export interface ILoginArgs {    
        apiKey: string;
    }

export const loginOptions: ICliCommandOptions<ILoginArgs> = {
    
        apiKey: {
            description: "Files API for login in.",
            normalize: true,
            default: "Hello World!",
            type: "string"
        },
    };