export interface IConfigFile {
    globalOptions: IOption[];
    commands: ICommand[]
}

export interface IOption {
    name: string;
    description: string;
    type: string;
    default: string;
}

export interface ICommand {
    depth: number;
    name: string;
    description: string;
    options: IOption[];
    // Note: This is recursive
    subCommands: ICommand[];
}