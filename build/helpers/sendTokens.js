"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTokens = void 0;
const ABI = process.env.ABI;
const MNEMONIC = process.env.MNEMONIC;
const value = 0;
const gasLimit = 3000n * 100000n;
const AMOUNT = process.env.AMOUNT;
const ADDRESS = process.env.ADDRESS?.toString();
const sendTokens = async (args, message) => {
    message.reply('You sent a token, yay!!!');
};
exports.sendTokens = sendTokens;
//# sourceMappingURL=sendTokens.js.map