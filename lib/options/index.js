"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _globalOptions = require("./globalOptions");

Object.keys(_globalOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _globalOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _globalOptions[key];
    }
  });
});
//# sourceMappingURL=index.js.map