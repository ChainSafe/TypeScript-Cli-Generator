"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.account = void 0;

var _list = require("./cmds/list");

const account = {
  command: "account <command>",
  describe: "Utilities for generating and managing Ethereum 2.0 accounts",
  subcommands: [_list.list]
};
exports.account = account;
//# sourceMappingURL=index.js.map