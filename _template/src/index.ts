#!/usr/bin/env node

import yargs from "yargs";
import {YargsError} from "./src/util";
import {getCli} from "./cli";
import "source-map-support/register";

const cli = getCli();

cli
  .fail((msg, err) => {
    if (msg) {
      // Show command help message when no command is provided
      if (msg.includes("Not enough non-option arguments")) {
        yargs.showHelp();
        // eslint-disable-next-line no-console
        console.log("\n");
      }
    }

    const errorMessage = err ? (err instanceof YargsError ? err.message : err.stack) : msg || "Unknown error";

    // eslint-disable-next-line no-console
    console.error(` ✖ ${errorMessage}\n`);
    process.exit(1);
  })

  // Execute CLI
  .parse();