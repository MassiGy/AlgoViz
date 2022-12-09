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
function insertion_sort(list, bars, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        // set the sub sorted array last index to 0 initially
        let sorted_array_last_index = 0;
        let temp;
        let val;
        let el_to_insert;
        let insert_into_el;
        for (let i = 1; i < list.length; i++) {
            // set the max of the sub sorted array to the last element of it.
            // if we found an elemnet smaller then the sub_sorted_array_last_el
            if (list[i] < list[sorted_array_last_index]) {
                for (let j = 0; j < sorted_array_last_index + 1; j++) {
                    // if we hit a trigger
                    // which is an element bigger then the element to insert inside the sub sorted array
                    if (list[i] < list[j]) {
                        // save the i element value;
                        temp = list[i];
                        // insert the element at the position of the trigger;
                        list[i] = list[j];
                        list[j] = temp;
                        // make the bars move as well, by changing the transform values
                        el_to_insert = bars.children.namedItem(String(i));
                        insert_into_el = bars.children.namedItem(String(j));
                        el_to_insert.style.backgroundColor = "yellow";
                        insert_into_el.style.backgroundColor = "yellow";
                        val = el_to_insert.style.transform;
                        el_to_insert.style.transform = insert_into_el.style.transform;
                        insert_into_el.style.transform = val;
                        // change the ids, to preserve the relation between the id and the position on the bars container
                        temp = el_to_insert.getAttribute("id");
                        el_to_insert.setAttribute("id", insert_into_el.getAttribute("id"));
                        insert_into_el.setAttribute("id", temp);
                        yield (0, sleep_js_1.default)(delay * 1500);
                        el_to_insert.style.backgroundColor = "grey";
                        insert_into_el.style.backgroundColor = "grey";
                    }
                }
            }
            // increment the sub_sorted array length
            sorted_array_last_index++;
        }
    });
}
exports.default = insertion_sort;
