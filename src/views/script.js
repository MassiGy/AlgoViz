import bubble_sort from "../algorithms/bubble_sort.js";
import selection_sort from "../algorithms/selection_sort.js";
import insertion_sort from "../algorithms/insertion_sort.js";


let default_height = 450;
let default_width = 600;
let max_list_number = 30;


let bars = document.getElementById("bars");
let animation_delay_counter = document.getElementById("animation-delay");
let bars_number_counter = document.getElementById("bars-count");



let list = Array.from({ length: parseInt(bars_number_counter.value) },
    () => Math.floor((Math.random() * max_list_number) + 1));;

let item = null;

list.forEach((el, index) => {
    item = document.createElement('div');
    item.style = `
            width: ${(default_width / 2) / list.length}px;
            height: ${el * (default_height / max_list_number)}px;
            margin-top: ${default_height - (el * (default_height / max_list_number))}px;
            position: absolute;
            transform: translate(${parseFloat(index * default_width / list.length)}px, 0%);
            transition: ${animation_delay_counter.value}s ease-in-out;
            background-color: grey;
    `;
    // set an id so as we can refrence it back, 
    // it is important that these ids are in synch with the ids on the list
    item.setAttribute("id", index);
    item.setAttribute("class", "bars_item");
    bars.append(item);
});


let launcher = document.getElementById("launcher");
let algoName = document.getElementById('algoName');

launcher.addEventListener("click", () => {
            let inputValue = document.getElementById('search_input').value;
            switch (inputValue) {
                case "bubbleSort":
                    bubble_sort(list, bars);
                    algoName.textContent=inputValue;
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

let resetButtun = document.getElementById('reset');
resetButtun.addEventListener('click', () => reset()); 

function reset() {
    window.location.reload();
}

launcher.addEventListener("click", () => bubble_sort(list, bars));

animation_delay_counter.addEventListener("change", () => window.location.reload());
bars_number_counter.addEventListener("change", () => window.location.reload());










