import bubble_sort from "../algorithms/bubble_sort.js";
import selection_sort from "../algorithms/selection_sort.js";
import insertion_sort from "../algorithms/insertion_sort.js";
const default_height = 450;
const default_width = 600;
const max_list_number = 150;
const bars = document.querySelector("#bars");
const animation_delay_counter = document.querySelector("#animation-delay");
const bars_number_counter = document.querySelector("#bars-count");
let list = Array.from({ length: parseInt(bars_number_counter === null || bars_number_counter === void 0 ? void 0 : bars_number_counter.value) }, () => Math.floor(Math.random() * max_list_number + 2));
let item;
list.forEach((el, index) => {
    item = document.createElement("div");
    item.setAttribute("style", `
    width: ${default_width / 2 / list.length}px;
    height: ${el * (default_height / max_list_number)}px;
    margin-top: ${default_height - el * (default_height / max_list_number)}px;
    position: absolute;
    transform: translate(${(index * default_width) / list.length}px, 0%);
    transition: ${animation_delay_counter === null || animation_delay_counter === void 0 ? void 0 : animation_delay_counter.value}s ease-in-out;
    background-color: grey;
    `);
    // set an id so as we can refrence it back,
    // it is important that these ids are in synch with the ids on the list
    item.setAttribute("id", String(index));
    item.setAttribute("class", "bars_item");
    bars === null || bars === void 0 ? void 0 : bars.append(item);
});
const launcher = document.querySelector("#launcher");
const algoName = document.querySelector("#algoName");
launcher === null || launcher === void 0 ? void 0 : launcher.addEventListener("click", () => {
    var _a;
    let inputValue = (_a = document.querySelector("#search_input")) === null || _a === void 0 ? void 0 : _a.value;
    algoName === null || algoName === void 0 ? void 0 : algoName.setAttribute("text", inputValue);
    switch (inputValue) {
        case "bubbleSort":
            bubble_sort(list, bars, Number(animation_delay_counter === null || animation_delay_counter === void 0 ? void 0 : animation_delay_counter.value));
            break;
        case "insertionSort":
            insertion_sort(list, bars, Number(animation_delay_counter === null || animation_delay_counter === void 0 ? void 0 : animation_delay_counter.value));
            break;
        case "selectionSort":
            selection_sort(list, bars, Number(animation_delay_counter === null || animation_delay_counter === void 0 ? void 0 : animation_delay_counter.value));
            break;
        default:
            break;
    }
});
function reset() {
    window.location.reload();
}
let resetButtun = document.getElementById("reset");
resetButtun === null || resetButtun === void 0 ? void 0 : resetButtun.addEventListener("click", () => reset());
animation_delay_counter === null || animation_delay_counter === void 0 ? void 0 : animation_delay_counter.addEventListener("change", () => window.location.reload());
bars_number_counter === null || bars_number_counter === void 0 ? void 0 : bars_number_counter.addEventListener("change", () => window.location.reload());
