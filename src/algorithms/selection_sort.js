import sleep from "../helpers/sleep.js";

export default async function selection_sort(list, bars) {
    let max;
    let max_index;
    let temp;
    let max_bar;
    let last_bar;
    let val;

    for (let i = 0; i < list.length; i++) {

        max = list[0]
        max_index = 0

        for (let j = 0; j < list.length - i; j++) {
            if (list[j] > max) {
                max = list[j];
                max_index = j;
            }
        }

        // swap the last sub array el and the max on the data array 
        temp = list[list.length - i - 1];
        list[list.length - i - 1] = max;
        list[max_index] = temp;

        // swap the last sub array el and the max corresponding bars.
        max_bar = bars.children.namedItem(String(max_index));
        last_bar = bars.children.namedItem(String(list.length - i - 1));
       
        
        // swap their transform css proprety values
        val = max_bar.style.transform;
        max_bar.style.transform = last_bar.style.transform;
        last_bar.style.transform = val;
        
       
        // swap the last sub array el bar id with the max bar id
        temp = max_bar.getAttribute("id");
        max_bar.setAttribute("id", last_bar.getAttribute("id"));
        last_bar.setAttribute("id", temp);

        // sleep 2s, since we are swapping two elements, and foreach of them the transition is 1s
        await sleep(2000);
    }
}

