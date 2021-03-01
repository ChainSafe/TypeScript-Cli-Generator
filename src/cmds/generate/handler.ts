import ejs from "ejs";
import fs from "fs";
import path from "path";
import {IConfigFile} from "./configTypes";
import exampleJson from "./fake";

enum TemplateFiles {
    globalOptions = "./templates/globalOptions.ejs",
    commandOptions = "./templates/commandOptions.ejs",
}

export async function handler(args: any): Promise<void> {
    const config = parseConfig(args.config);
    
    // Use defaults for now
    const ejsOpts = {};

    // 1. Generate global flags
    await renderEjs(TemplateFiles.globalOptions, config, ejsOpts);

    // 2. Generate commands
    for (let i=0; i < config.commands.length; i++) {
        // First render command options file
        await renderEjs(TemplateFiles.commandOptions, config.commands[i], ejsOpts);
        process.exit(1)
    }
}

const renderEjs = async (filename: TemplateFiles, data: Object, opts: Object) => {
    try {
        const file = path.join(__dirname,filename);
        console.log(data)
        const str = await ejs.renderFile(file, data, opts);
        
        console.log(str)
        // const outputFile = path.join(process.cwd(), "./out.ts");
        // fs.writeFileSync(outputFile, str);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

const parseConfig = (file: string): IConfigFile => {
    // TODO handle the file import better
    // let json = require(file);
    // temp override
    let json = exampleJson;
    return JSON.parse(json) as IConfigFile;
  }
  