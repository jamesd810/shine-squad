"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const logo_png_1 = __importDefault(require("../logo.png"));
const react_1 = require("@testing-library/react");
(0, vitest_1.describe)("ShineSquadLogo", () => {
    let component;
    const whenTheComponentIsRendered = () => {
        (0, react_1.render)(<logo_png_1.default />);
    };
    const thenTheComponentIsWellFormed = () => { };
    (0, vitest_1.it)("When the component is rendered, then the logo shows in the browser", () => {
        whenTheComponentIsRendered();
        thenTheComponentIsWellFormed();
    });
});
