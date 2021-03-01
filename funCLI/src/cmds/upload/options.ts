import {ICliCommandOptions} from "../../util";

export interface IUploadArgs {    
        message: string;
    }

export const uploadOptions: ICliCommandOptions<IUploadArgs> = {
    
        message: {
            description: "The message to console.log",
            normalize: true,
            default: "Hello World!",
            type: "string"
        },
    };