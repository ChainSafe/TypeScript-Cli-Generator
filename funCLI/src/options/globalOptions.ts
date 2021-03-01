import {ICliCommandOptions} from "../util";

export interface IGlobalArgs {
    
        url: string;
    
        Blah: string;
    
}

export const globalOptions: ICliCommandOptions<IGlobalArgs> = {
    
        url: {
            description: "URL of the files API to connect to.",
            normalize: true,
            default: "http://files.chainsafe.io/api",
            type: "string"
        },
    
        Blah: {
            description: "This is an example",
            normalize: true,
            default: "Hello World!",
            type: "string"
        },
    
};