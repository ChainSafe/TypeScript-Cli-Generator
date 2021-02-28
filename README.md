# TypeScript CLI Template

This template was a port of the [Lodestar CLI](https://github.com/ChainSafe/lodestar/), and thus heavily inspired by the design patters of Lodestar.

### Using this tempalte
In its current state, the best way to use this template is to fork it, and modify it that way. The CLI makes use of Yargs, and has added some very helpful utilities to make it easier to use with TypeScript.

#### Modifications
Although there is a lot that can be changed, the bulk of the setup has been done for you. The main things that need updating can be searched for by looking up `// TODO: change this!`. After that, the world is your oyster.

### Roadmap
- Cli generator
  - This would allow someone to pass a configuration file, that could scaffold the project for them. Why? Bootstrapping is annoying, and having a quick way to generate all the commands and flags at the beginning will save lots of time.
  - The vision would be the user gets prompted similar commands when they `npm init`, but they would also pass a configuration file such as: 
  ```json
    {
        globalOptions: [
            {
                name: "example",
                description: "This is an example",
                ...
            }
        ],
        commands: [
            {
                name: "Account",
                description: "Account command",
                subCommands: [
                    {
                        ...more commands
                    }
                ]
            },
            {
                name: "Log",
                description: "Console logs whatever the user inputs",
                options: [
                    {
                        name: "message",
                        description: "The message to console.log"
                    }
                ]
            }
        ]
    }
  ```