import yargs from "yargs";
/**
 * Common factory for running the CLI and running integration tests
 * The CLI must actually be executed in a different script
 */
export declare function getCli(): yargs.Argv;
