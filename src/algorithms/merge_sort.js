import sleep from "../helpers/sleep.js";





export async function merge_sort(list, bars) {

    if (list.length <= 1) return list;

    let mid = list.length / 2;


    let left = list.splice(0, mid); // first half of the list
    let right = list; // rest of the list

    return merge_sort_proc(
        merge_sort(left, bars),
        merge_sort(right, bars)
    );
}

export async function merge_sort_proc(first, second, bars) {
    let res = [];

    while (first.length && second.length) {

        if (first[0] <= second[0]) {

            res.push(first.shift());

        } else {

            res.push(second.shift());

        }

    }


    while (first.length) {
        res.push(first.shift());
    }



    while (second.length) {
        res.push(second.shift());
    }


    return res;
}