"use strict";
let searchInput = document.getElementById('search_input');
let algosTypes = ["bubbleSort", "insertionSort", "selectionSort"];
searchInput.addEventListener("input", (e) => {
    removeItems();
    for (let i of algosTypes) {
        if (i.toLowerCase().startsWith(searchInput.value.toLowerCase()) && searchInput.value != "") {
            let item = document.createElement("option");
            item.setAttribute('class', 'list-item');
            item.setAttribute("onclick", "displayNames('" + i + "')");
            item.setAttribute('value', i);
            let datalist = document.querySelector("#search");
            datalist.appendChild(item);
        }
    }
    ;
});
function displayNames(value) {
    searchInput.value = value;
}
function removeItems() {
    let items = document.querySelectorAll(".list-item");
    items.forEach((item) => {
        item.remove();
    });
}
