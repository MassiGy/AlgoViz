import sleep from "../helpers/sleep.js";

export default async function insertion_sort(
  list: number[],
  bars: HTMLDivElement,
  delay: number
) {
  // set the sub sorted array last index to 0 initially
  let sorted_array_last_index: number = 0;
  let temp: number;
  let val: string;
  let el_to_insert: HTMLDivElement;
  let insert_into_el: HTMLDivElement;

  for (let i = 1; i < list.length; i++) {
    // set the max of the sub sorted array to the last element of it.

    // if we found an elemnet smaller then the sub_sorted_array_last_el
    if (list[i] < list[sorted_array_last_index]) {
      for (let j = 0; j < sorted_array_last_index + 1; j++) {
        // if we hit a trigger
        // which is an element bigger then the element to insert inside the sub sorted array
        if (list[i] < list[j]) {
          // save the i element value;
          temp = list[i];

          // insert the element at the position of the trigger;
          list[i] = list[j];
          list[j] = temp;

          // make the bars move as well, by changing the transform values
          el_to_insert = bars.children.namedItem(String(i)) as HTMLDivElement;
          insert_into_el = bars.children.namedItem(String(j)) as HTMLDivElement;

          el_to_insert.style.backgroundColor = "yellow";
          insert_into_el.style.backgroundColor = "yellow";

          val = el_to_insert.style.transform;
          el_to_insert.style.transform = insert_into_el.style.transform;
          insert_into_el.style.transform = val;

          // change the ids, to preserve the relation between the id and the position on the bars container
          temp = Number(el_to_insert.getAttribute("id"));
          el_to_insert.setAttribute("id",String(insert_into_el.getAttribute("id")));
          insert_into_el.setAttribute("id", String(temp));

          await sleep(delay * 1500);

          el_to_insert.style.backgroundColor = "grey";
          insert_into_el.style.backgroundColor = "grey";
        }
      }
    }
    // increment the sub_sorted array length
    sorted_array_last_index++;
  }
}
