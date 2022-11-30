import sleep from "../helpers/sleep.js";

export default async function selection_sort(list, bars) {
    let max;
    let max_index;
    let temp;
    let fst;
    let snd;


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
        fst = bars.children.namedItem(String(max_index));
        snd = bars.children.namedItem(String(list.length - i - 1));
       

        val = fst.style.transfrom;
        fst.style.transfrom = snd.style.transfrom;
        snd.style.transfrom = val;


        // swap the last sub array el bar id with the max bar id
        temp = fst.getAttribute("id");
        fst.setAttribute("id", snd.getAttribute("id"));
        snd.setAttribute("id", temp);



        // await sleep(2000);
    }
    console.log(list);
}



    return list;
}
