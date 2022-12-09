import bubble_sort from "../algorithms/bubble_sort.js";
import selection_sort from "../algorithms/selection_sort.js";
import insertion_sort from "../algorithms/insertion_sort.js";

const default_height: number = 450;
const default_width: number = 600;
const max_list_number: number = 150;

const bars = document.querySelector("#bars") as HTMLDivElement;
const animation_delay_counter = document.querySelector(
  "#animation-delay"
) as HTMLInputElement;
const bars_number_counter = document.querySelector(
  "#bars-count"
) as HTMLInputElement;

let list: number[] = Array.from(
  { length: parseInt(bars_number_counter?.value as string) },
  () => Math.floor(Math.random() * max_list_number + 2)
);

let item;

list.forEach((el, index) => {
  item = document.createElement("div") as HTMLDivElement;
  item.setAttribute(
    "style",
    `
    width: ${default_width / 2 / list.length}px;
    height: ${el * (default_height / max_list_number)}px;
    margin-top: ${default_height - el * (default_height / max_list_number)}px;
    position: absolute;
    transform: translate(${(index * default_width) / list.length}px, 0%);
    transition: ${animation_delay_counter?.value}s ease-in-out;
    background-color: grey;
    `
  );
  // set an id so as we can refrence it back,
  // it is important that these ids are in synch with the ids on the list
  item.setAttribute("id", String(index));
  item.setAttribute("class", "bars_item");
  bars?.append(item);
});

const launcher = document.querySelector("#launcher") as HTMLButtonElement;
const algoName = document.querySelector("#algoName") as HTMLTitleElement;

launcher?.addEventListener("click", () => {
  let inputValue =
    document.querySelector<HTMLInputElement>("#search_input")?.value;

  algoName?.setAttribute("text", inputValue as string);

  switch (inputValue) {
    case "bubbleSort":
      bubble_sort(list, bars, Number(animation_delay_counter?.value));
      break;

    case "insertionSort":
      insertion_sort(list, bars, Number(animation_delay_counter?.value));
      break;

    case "selectionSort":
      selection_sort(list, bars, Number(animation_delay_counter?.value));
      break;

    default:
      break;
  }
});

function reset() {
  window.location.reload();
}

let resetButtun = document.getElementById("reset");
resetButtun?.addEventListener("click", () => reset());

animation_delay_counter?.addEventListener("change", () =>
  window.location.reload()
);
bars_number_counter?.addEventListener("change", () => window.location.reload());
