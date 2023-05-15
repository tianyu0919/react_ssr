"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = exports.vars = exports.themeClass = void 0;
const css_1 = require("@vanilla-extract/css");
_a = (0, css_1.createTheme)({
    color: "#acf4d0",
}), exports.themeClass = _a[0], exports.vars = _a[1];
exports.container = (0, css_1.style)({
    color: exports.vars.color,
    background: 'blue'
});
