"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.example = void 0;

var _helloWorld = require("./cmds/helloWorld");

const example = {
  command: "example <command>",
  describe: "An example description",
  subcommands: [_helloWorld.helloWorld]
};
exports.example = example;
//# sourceMappingURL=index.js.map