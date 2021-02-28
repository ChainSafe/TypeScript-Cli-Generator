"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCli = getCli;

var _yargs = _interopRequireDefault(require("yargs"));

var _cmds = require("./cmds");

var _options = require("./options");

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Must not use `* as yargs`, see https://github.com/yargs/yargs/issues/1131
const {
  name,
  description
} = require("../package.json");

const topBanner = description;
const bottomBanner = "For more information, check the CLI docs [...]";
/**
 * Common factory for running the CLI and running integration tests
 * The CLI must actually be executed in a different script
 */

function getCli() {
  const hydra = _yargs.default.env(name) // TODO: Change this!
  .parserConfiguration({
    // As of yargs v16.1.0 dot-notation breaks strictOptions()
    // Manually processing options is typesafe tho more verbose
    "dot-notation": false
  }).options(_options.globalOptions) // blank scriptName so that help text doesn't display the cli name before each command
  .scriptName("").demandCommand(1) // Control show help behaviour below on .fail()
  .showHelpOnFail(false).usage(topBanner).epilogue(bottomBanner).alias("h", "help").alias("v", "version").recommendCommands(); // yargs.command and all ./cmds


  for (const cmd of _cmds.cmds) {
    (0, _util.registerCommandToYargs)(hydra, cmd);
  } // throw an error if we see an unrecognized cmd


  hydra.recommendCommands().strict();
  return hydra;
}
//# sourceMappingURL=cli.js.map