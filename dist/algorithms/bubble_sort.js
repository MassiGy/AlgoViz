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
function bubble_sort(list, bars, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        let val;
        let temp = 0;
        let fst;
        let snd;
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length - 1; j++) {
                if (list[j] > list[j + 1]) {
                    temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    // get the j'th element at first
                    fst = bars.children.namedItem(String(j));
                    // get the (j+1)'th element at second
                    snd = bars.children.namedItem(String(j + 1));
                    // swap their transform css proprety values
                    fst.style.backgroundColor = "yellow";
                    snd.style.backgroundColor = "yellow";
                    val = fst.style.transform;
                    fst.style.transform = snd.style.transform;
                    snd.style.transform = val;
                    // swap their ids, since id is thier index on the outer div (canvas) 
                    temp = fst.getAttribute("id");
                    fst.setAttribute("id", snd.getAttribute("id"));
                    snd.setAttribute("id", temp);
                    // sleep, since we are swapping two elements, and we need a transition to see the sawapping effect
                    yield (0, sleep_js_1.default)(delay * 1500);
                    fst.style.backgroundColor = "grey";
                    snd.style.backgroundColor = "grey";
                }
            }
        }
    });
}
exports.default = bubble_sort;
