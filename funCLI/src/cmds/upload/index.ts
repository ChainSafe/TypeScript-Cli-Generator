import {ICliCommand} from "../../util";
import {IGlobalArgs} from "../../options";
import { IUploadArgs, uploadOptions } from "./options";
import {uploadHandler} from "./handler";

export const upload: ICliCommand<Record<never, never>, IUploadArgs & IGlobalArgs > = {
  command: "upload",
  
  describe: "Console logs whatever the user inputs",

  examples: [
    {
      // TODO: Change this!
      command: "",
      description: "",
    },
  ],

  options: uploadOptions,
  
  handler: uploadHandler  
};