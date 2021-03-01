import ejs from "ejs";
import fs from "fs";
import path from "path";
import {IConfigFile} from "./configTypes";
import exampleJson from "./fake";

enum TemplateFiles {
    globalOptions = "./templates/globalOptions.ejs",
    commandOptions = "./templates/commandOptions.ejs",
    commandHandler = "./templates/commandHandler.ejs",
    command = "./templates/command.ejs",
}

enum TemplateOut {
    globalOptions = "globalOptions.ts",
    commandOptions = "options.ts",
    commandHandler = "handler.ts",
    command = "index.ts",
}

export async function generateHandler(args: any): Promise<void> {
    const config = parseConfig(args.config);
    
    // Use defaults for now
    const ejsOpts = {};

    // 1. Generate global flags
    console.log("------global options------")
    await renderEjs(TemplateFiles.globalOptions, config, ejsOpts, TemplateOut.globalOptions);

    // 2. Generate commands
    for (let i=0; i < config.commands.length; i++) {
        // First render command options file
        console.log("-----------------------")
        console.log("------new command------")
        console.log("-----------------------")
        await renderEjs(TemplateFiles.commandOptions, config.commands[i], ejsOpts, TemplateOut.commandOptions);
        await renderEjs(TemplateFiles.commandHandler, config.commands[i], ejsOpts, TemplateOut.commandHandler);
        await renderEjs(TemplateFiles.command, config.commands[i], ejsOpts, TemplateOut.command);
        process.exit(1)
    }
}

const renderEjs = async (
    template: TemplateFiles, 
    data: Object, 
    opts: Object,
    fileOut: string,
) => {
    try {
        const templateFile = path.join(__dirname, template);
        const str = await ejs.renderFile(templateFile, data, opts);
        
        console.log("....BEGIN FILE....")
        console.log(str)
        console.log("....END FILE....")
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
  