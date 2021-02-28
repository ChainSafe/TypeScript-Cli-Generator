"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloWorld = void 0;
const helloWorld = {
  command: "hello",
  describe: "Logs otpions to screen",
  examples: [{
    command: "account wallet list --walletsDir .network/wallets",
    description: "List all wallets in .network/wallets"
  }],
  handler: async args => {
    let res = "Hello world!";
    return res;
  }
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map