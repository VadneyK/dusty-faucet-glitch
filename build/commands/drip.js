"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drip = void 0;
const helpers = require('../helpers');
class drip {
    constructor() {
        this.name = 'drip';
        this.args = 1;
        this.usage = '<dusty address>';
        this.name = 'drip';
        this.args = 1;
        this.usage = '<dusty address>';
    }
    execute(message, args) {
        try {
            helpers.Api.sendTokens(message, args);
        }
        catch (e) {
            console.log('Error connecting to network: {}', e);
        }
    }
}
exports.drip = drip;
//# sourceMappingURL=drip.js.map