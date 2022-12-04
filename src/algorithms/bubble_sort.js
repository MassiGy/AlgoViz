import sleep from "../helpers/sleep.js";

export default async function bubble_sort(list, bars) {
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
                fst.style.backgroundColor = "yellow";
                snd.style.backgroundColor = "yellow";
                val = fst.style.transform;
                fst.style.transform = snd.style.transform;
                snd.style.transform = val;

                // swap their ids, since id is thier index on the outer div (canvas) 
                temp = fst.getAttribute("id");
                fst.setAttribute("id", snd.getAttribute("id"));
                snd.setAttribute("id", temp);


                // sleep 2s, since we are swapping two elements, and foreach of them the transition is 1s
                await sleep(2000);

                fst.style.backgroundColor = "grey";
                snd.style.backgroundColor = "grey";


            }
        }
    }
}
