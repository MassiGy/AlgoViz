let searchInput = document.querySelector('#search_input') as HTMLInputElement;


let algosTypes: string[] = ["bubbleSort","insertionSort", "selectionSort"];
const datalist = document.querySelector("#search") as HTMLDataListElement
let item: HTMLElement;

searchInput.addEventListener("input", (e) => {
   
    removeItems();
    for (let i of algosTypes) {

        if (i.toLowerCase().startsWith(searchInput.value.toLowerCase()) && searchInput.value != "") {

            item = document.createElement("option");

            item.setAttribute('class', 'list-item');
            item.setAttribute("onclick", "displayNames('" + i + "')" );
            item.setAttribute('value', i);

            datalist.appendChild(item);
        }

    };

})

function displayNames(value: string) {
    searchInput.value = value;
}

function removeItems() {
    let items = document.querySelectorAll(".list-item");
    items.forEach((item) => {
        item.remove();
    })
}


