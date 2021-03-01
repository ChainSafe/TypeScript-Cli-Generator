import ejs from "ejs";
import fs from "fs";
import path from "path";
import {ICommand, IConfigFile} from "./configTypes";
import exampleJson from "./fake";

enum TemplateFiles {
    globalOptions = "./templates/globalOptions.ejs",
    commandOptions = "./templates/commandOptions.ejs",
    commandHandler = "./templates/commandHandler.ejs",
    commandIndex = "./templates/commandIndex.ejs",
    rootCommandIndex = "./templates/rootCommandIndex.ejs",
}

enum TemplateOut {
    globalOptions = "globalOptions.ts",
    commandOptions = "options.ts",
    commandHandler = "handler.ts",
    commandIndex = "index.ts",
    rootCommandIndex = "index.ts",
}

interface ICommandStore {
    options: string;
    handler: string;
    index: string;
    name: string;
    depth: number;
    subCommands: ICommandStore[];
}

interface IFileStore {
    globalOptions: string;
    rootCommandIndex: string;
    commands: ICommandStore[];
}

// Use defaults for now
const ejsOpts = {};

export async function generateHandler(args: any): Promise<void> {
    const config = parseConfig(args.config);

    // Collect files
    const fileStore: IFileStore = {
        globalOptions: "",
        rootCommandIndex: "",
        commands: [] as ICommandStore[]
    };

    // 1. Generate global flags
    fileStore.globalOptions = await generateEjs(TemplateFiles.globalOptions, config, ejsOpts);

    // 2. Generate command files
    fileStore.commands = await generateCommands(config.commands);

    // 3. Generate root command index
    const cmdNames = fileStore.commands.map((x: ICommandStore) => x.name);
    fileStore.rootCommandIndex = await generateEjs(TemplateFiles.rootCommandIndex, {cmdNames}, ejsOpts);

    // Write files
    console.log(fileStore);
    // console.log(fileStore.commands[0]);
    // console.log(fileStore.commands[1]);
}

const generateCommands = async (
    commands: ICommand[],
    depth: number = 0,
    store: ICommandStore[] = [],
): Promise<ICommandStore[]> => {
    
    for (let i=0; i < commands.length; i++) {
        const command: ICommand = commands[i];
        if (command.subCommands && command.subCommands.length > 0) { 
            // Recursively get the subCommands
            const subCommands: ICommandStore[] = await generateCommands(command.subCommands, depth + 1);
            const cmd: ICommandStore = await generateCommand(command, depth, subCommands);
            store.push(cmd);
            // increment level
            depth++
        } else {
            store.push(await generateCommand(command, depth));
        }
    }
    
    return store;
}

const generateCommand = async (command: ICommand, depth: number = 0, subCommands: ICommandStore[] = []): Promise<ICommandStore> => {
    command.depth = depth;
    let cmd = {} as ICommandStore;
    cmd.depth = depth;
    cmd.name = command.name.toLowerCase();
    cmd.options = await generateEjs(TemplateFiles.commandOptions, command, ejsOpts);
    cmd.handler = await generateEjs(TemplateFiles.commandHandler, command, ejsOpts);
    cmd.index = await generateEjs(TemplateFiles.commandIndex, command, ejsOpts);
    cmd.subCommands = subCommands;
    return cmd;
}

const generateEjs = async (
    template: TemplateFiles, 
    data: Object, 
    opts: Object
): Promise<string> => {
    try {
        const templateFile = path.join(__dirname, template);
        const str = await ejs.renderFile(templateFile, data, opts);
        
        // const outputFile = path.join(process.cwd(), "./out.ts");
        // fs.writeFileSync(outputFile, str);
        return str
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
  