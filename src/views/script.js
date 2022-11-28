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


console.log(bars.children);


let launcher = document.getElementById("launcher")

launcher.addEventListener("click", () => bubble_sort(list, bars))


const sleep = (millis) =>
    new Promise((resolve) => setTimeout(resolve, millis));


async function bubble_sort(list, bars) {
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
                snd = bars.children.namedItem(String(j + 1))

                // swap their transform css proprety values
                val = fst.style.transform;
                fst.style.transform = snd.style.transform;
                snd.style.transform = val;

                // swap their ids, since id is thier index on the outer div (canvas) 
                temp = fst.getAttribute("id");
                fst.setAttribute("id", snd.getAttribute("id"));
                snd.setAttribute("id", temp);

                // sleep 2s, since we are swapping two elements, and foreach of them the transition is 1s
                await sleep(2000);

            }
        }
    }
}










