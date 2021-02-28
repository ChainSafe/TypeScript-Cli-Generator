#!/usr/bin/env node
"use strict";

var _yargs = _interopRequireDefault(require("yargs"));

var _util = require("./util");

var _cli = require("./cli");

require("source-map-support/register");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const lodestar = (0, _cli.getCli)();
lodestar.fail((msg, err) => {
  if (msg) {
    // Show command help message when no command is provided
    if (msg.includes("Not enough non-option arguments")) {
      _yargs.default.showHelp(); // eslint-disable-next-line no-console


      console.log("\n");
    }
  }

  const errorMessage = err ? err instanceof _util.YargsError ? err.message : err.stack : msg || "Unknown error"; // eslint-disable-next-line no-console

  console.error(` ✖ ${errorMessage}\n`);
  process.exit(1);
}) // Execute CLI
.parse();
//# sourceMappingURL=index.js.map