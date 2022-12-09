"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));
exports.default = sleep;
