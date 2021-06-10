"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
(() => {
    console.log('Starting bot server...');
    app_1.default().catch((e) => {
        console.log(e);
    });
})();
//# sourceMappingURL=index.js.map