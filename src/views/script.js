import bubble_sort from "../algorithms/bubble_sort.js";
import selection_sort from "../algorithms/selection_sort.js";


let default_height = 450;
let default_width = 600;


let bars = document.getElementById("bars");
// bars.style = `width: ${default_width}px; 
//               height: ${default_height}px;
//               margin: auto auto;
//               background-color: grey;
//               position: relative;
//               `;

let list = [9, 1, 2, 4, 7, 5];
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


//
let launcher = document.getElementById("launcher");
let algoName = document.getElementById('algoName');
launcher.addEventListener("click", () => {
            let inputValue = document.getElementById('search_input').value;
            switch (inputValue) {
                case "bubbleSort":
                    bubble_sort(list, bars);
                    algoName.textContent = inputValue;
                    break;
                case "insertionSort":
                    insertion_sort(list, bars);
                    
                    algoName.textContent = inputValue;
                    break;
                case "selectionSort":
                    selection_sort(list, bars);
                    
                    algoName.textContent = inputValue;
                    break;
                case "mergeSort":
                    merge_sort(list, bars);
                    
                    algoName.textContent = inputValue;
                    break;
                default:
                    break;
    
            }


});













