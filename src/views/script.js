import bubble_sort from "../algorithms/bubble_sort.js";


let default_height = 600;
let default_width = 600;


let bars = document.getElementById("bars");
bars.style = `width: ${default_width}px; 
              height: ${default_height}px;
              margin: auto auto;
              background-color: grey;
              position: relative;
              `;

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
            background-color: red;
    `;
    // set an id so as we can refrence it back, 
    // it is important that these ids are in synch with the ids on the list
    item.setAttribute("id", index);
    bars.append(item);
})


console.log( bars.children);

let offset = 0;
let limit = 0;

// for(i =0; i < list.length; ++i)
// {
    for(j = 0; j < list.length - 1; j++)
    {
        if(list[j] < list[j+1])
        {
            temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
            console.log(bars.children[j].init_xtranslate);


            limit = parseInt(bars.children[j+1].init_xtranslate);
            offset = 0;
            
            while(offset < limit)
            {
                bars.children[j].style.transform = `translate(${bars.children[j].init_xtranslate + offset}px,0%)`;
                bars.children[j].init_xtranslate += offset;

                bars.children[j+1].style.transform = `translate(${limit - offset}px,0%)`;
                bars.children[j+1].init_xtranslate -= offset;
                
                console.log(bars.children[j+1].init_xtranslate);
             
                offset++;
            }
        }
    }
// // }


















let launcher = document.getElementById("launcher")

launcher.addEventListener("click", () => bubble_sort(list, bars))












