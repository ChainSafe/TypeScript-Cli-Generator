# TypeScript CLI Template Generator

The template that is used was a port of the [Lodestar CLI](https://github.com/ChainSafe/lodestar/), and thus heavily inspired by the design patters of Lodestar.

### Using the generator
The generator requires a configuration file, `config.example.json` is provided as guidance. It can be run as followed:
```bash
npx @ChainSafe/ts-cli generate --config ./<local_file> -o ./my-cli
```

#### Configuration File
The configuration file follows the following interface pattern:
```TypeScript
interface Config {
    name: string;               // Name of the CLI
    globalOptions: IOption[];   // Options available at the global scope
    commands: ICommand[];       // List of commands
}

interface IOption {             
    name: string;               // Name of the option, eg: --<name>
    description: string;        // Provides a description when --help is used
    type: string;               // Valid TypeScript type in strings, eg: number
    default: string;            // The default value
}

interface ICommand {
    name: string;               // Name of the command
    description: string;        // Provides a description when --help is used
    options: IOption[];         // Options available at the command level
    subCommands: ICommand[];    // Optional sub-commands
}
```

#### Modifications
Although there is a lot that can be changed, the bulk of the setup has been done for you. The main things that need updating can be searched for by looking up `// TODO: change this!`. After that, the world is your oyster.

### Roadmap
- [x] Cli generator
- [ ] ?