"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloWorld = void 0;
const helloWorld = {
  command: "hello",
  describe: "Logs words to the screen.",
  examples: [{
    command: "example hello --msg 'hello world!'",
    description: "Prints the words to screen!"
  }],
  options: {
    msg: {
      description: "Optional flag that overrides the message.",
      alias: ["n"],
      demandOption: false,
      type: "string"
    }
  },
  handler: async args => {
    const message = args.msg ? args.msg : args.exampleHello;
    console.log(message);
    return message;
  }
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map