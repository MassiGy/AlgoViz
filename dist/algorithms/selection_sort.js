"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sleep_js_1 = __importDefault(require("../helpers/sleep.js"));
function selection_sort(list, bars, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        let max;
        let max_index;
        let temp;
        let max_bar;
        let last_bar;
        let val;
        for (let i = 0; i < list.length; i++) {
            max = list[0];
            max_index = 0;
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > max) {
                    max = list[j];
                    max_index = j;
                }
            }
            // swap the last sub array el and the max on the data array 
            temp = list[list.length - i - 1];
            list[list.length - i - 1] = max;
            list[max_index] = temp;
            // swap the last sub array el and the max corresponding bars.
            max_bar = bars.children.namedItem(String(max_index));
            last_bar = bars.children.namedItem(String(list.length - i - 1));
            max_bar.style.backgroundColor = "yellow";
            last_bar.style.backgroundColor = "yellow";
            // swap their transform css proprety values
            val = max_bar.style.transform;
            max_bar.style.transform = last_bar.style.transform;
            last_bar.style.transform = val;
            // swap the last sub array el bar id with the max bar id
            temp = max_bar.getAttribute("id");
            max_bar.setAttribute("id", last_bar.getAttribute("id"));
            last_bar.setAttribute("id", temp);
            // sleep 2s, since we are swapping two elements, and foreach of them the transition is 1s
            yield (0, sleep_js_1.default)(delay * 1500);
            max_bar.style.backgroundColor = "grey";
            last_bar.style.backgroundColor = "grey";
        }
    });
}
exports.default = selection_sort;
