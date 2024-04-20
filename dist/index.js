"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boot = void 0;
const mylib_1 = require("mylib");
const boot = () => {
    // getName()
    // window.setName()
    // console.log(myName);
    // console.log()
    const name = (0, mylib_1.getMyLibName)();
    console.log(name);
};
exports.boot = boot;
(0, exports.boot)();
