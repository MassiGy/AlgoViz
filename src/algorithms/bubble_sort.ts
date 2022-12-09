import sleep from "../helpers/sleep.js";

export default async function bubble_sort(
  list: number[],
  bars: HTMLDivElement,
  delay: number
) {
  let val: string;
  let temp: number;
  let fst: HTMLDivElement;
  let snd: HTMLDivElement;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;

        // get the j'th element at first
        fst = bars.children.namedItem(String(j)) as HTMLDivElement;
        // get the (j+1)'th element at second
        snd = bars.children.namedItem(String(j + 1)) as HTMLDivElement;

        // swap their transform css proprety values
        fst.style.backgroundColor = "yellow";
        snd.style.backgroundColor = "yellow";
        val = fst.style.transform;
        fst.style.transform = snd.style.transform;
        snd.style.transform = val;

        // swap their ids, since id is thier index on the outer div (canvas)
        temp = Number(fst.getAttribute("id"));
        fst.setAttribute("id", String(snd.getAttribute("id")));
        snd.setAttribute("id", String(temp));

        // sleep, since we are swapping two elements, and we need a transition to see the sawapping effect
        await sleep(delay * 1500);

        fst.style.backgroundColor = "grey";
        snd.style.backgroundColor = "grey";
      }
    }
  }
}
