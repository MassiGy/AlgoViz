"use strict";
let searchInput = document.querySelector('#search_input');
let algosTypes = ["bubbleSort", "insertionSort", "selectionSort"];
const datalist = document.querySelector("#search");
let item;
searchInput.addEventListener("input", (e) => {
    removeItems();
    for (let i of algosTypes) {
        if (i.toLowerCase().startsWith(searchInput.value.toLowerCase()) && searchInput.value != "") {
            item = document.createElement("option");
            item.setAttribute('class', 'list-item');
            item.setAttribute("onclick", "displayNames('" + i + "')");
            item.setAttribute('value', i);
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
