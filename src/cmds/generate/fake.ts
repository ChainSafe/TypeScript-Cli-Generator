const exampleJson = `
{
    "name": "demoCli",
    "globalOptions": [
        {
            "name": "example",
            "description": "This is an example",
            "type": "string",
            "default": "Hello World!"
        },
        {
            "name": "example2",
            "description": "This is an example",
            "type": "string",
            "default": "Hello World!"
        }
    ],
    "commands": [
        {
            "name": "Log",
            "description": "Console logs whatever the user inputs",
            "options": [
                {
                    "name": "message",
                    "description": "The message to console.log",
                    "type": "string",
                    "default": "Hello World!"
                }
            ],
            "subCommands": []
        },
        {
            "name": "Account",
            "description": "Account command",
            "options": [],
            "subCommands": [
                {
                    "name": "Magic",
                    "description": "Perform a magic trick",
                    "options": [],
                    "subCommands": []
                },
                {
                    "name": "Flip",
                    "description": "Perform a flip",
                    "options": [],
                    "subCommands": []
                }
            ]
        }
    ]
}
`
export default exampleJson;