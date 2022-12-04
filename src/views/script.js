import bubble_sort from "../algorithms/bubble_sort.js";
import selection_sort from "../algorithms/selection_sort.js";
import insertion_sort from "../algorithms/insertion_sort.js";
import merge_sort from "../algorithms/merge_sort.js";


let default_height = 450;
let default_width = 600;


let bars = document.getElementById("bars");
// bars.style = `width: ${default_width}px; 
//               height: ${default_height}px;
//               margin: auto auto;
//               background-color: grey;
//               position: relative;
//               `;

let list = [1, 9, 2, 6, 4, 7, 5];
let item = null;


list.forEach((el, index) => {
    item = document.createElement('div');
    item.style = `
            width: ${(default_width / 2) / list.length}px;
            height: ${el * (default_height / 10)}px;
            margin-top: ${default_height - (el * (default_height / 10))}px;
            position: absolute;
            transform: translate(${parseFloat(index * default_width / list.length)}px, 0%);
            transition: 1s ease-in-out;
            background-color: grey;
    `;
    // set an id so as we can refrence it back, 
    // it is important that these ids are in synch with the ids on the list
    item.setAttribute("id", index);
    item.setAttribute("class", "bars_item");
    bars.append(item);
});


let launcher = document.getElementById("launcher");

launcher.addEventListener("click", () => { list = merge_sort(list, bars); console.log(list) });












