let default_height = 600;
let default_width = 600;


let bars = document.getElementById("bars");
bars.style = `width: ${default_width}px; 
              height: ${default_height}px;
              margin: auto auto;
              background-color: grey;
              position: relative;
              `;

let list = [9, 1, 5, 2, 8, 3, 6, 7];
let item = null;

list.forEach((el, index) => {
    item = document.createElement('div');
    item.style = `
            width: ${(default_width/2) / list.length}px;
            height: ${el * (default_height / 10)}px;
            margin-top: ${default_height -(el * (default_height / 10))}px;
            position: absolute;
            transform: translate(${ parseInt(index * default_width / list.length)}px, 0%);
            background-color: red;
    `;
    item.init_xtranslate = parseInt(index * default_width / list.length);

    bars.append(item);
})


console.log( bars.children);

let offset = 0;
let limit = 0;

// // for(i =0; i < list.length; ++i)
// // {
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

















// let list = [9, 1, 5, 2, 8, 3, 6, 7];
// let rect_xs = new Array(list.length);

// function draw_rects(list, rect_xs, height, width) {
//   list.forEach((el, index) => {
//     rect(
//       rect_xs[index],
//       height - (height / 10) * el,
//       width / 10 / 2,
//       (height / 10) * el
//     );
//   });
// }

// function setup() {
//   createCanvas(400, 400);
//   background(220);

//   list.forEach((el, index) => {
//     rect_xs[index] = index * (width / list.length);
//   });
// }

// function draw() {
//   fill(255);
//   background(220);

//   for (j = 0; j < list.length - 1; j++) {
//     background(220);
//     draw_rects(list, rect_xs, height, width);
  
//     if (list[j] > list[j + 1]) {
//       temp = rect_xs[j + 1];

//       while (rect_xs[j] < temp) {
//         rect_xs[j] += 1;
//         rect_xs[j + 1] -= 1;

//         background(220);
//         draw_rects(list, rect_xs, height, width);
//       }

//       temp = list[j];
//       list[j] = list[j + 1];
//       list[j + 1] = temp;
//     }
//   }
//   // if (isSorted(list)) noLoop();
//   // draw_rects(list, rect_xs, height, width);
// }

// //   let counter = 0;
// //   let list = [9, 1, 5, 2, 8, 3, 6, 7];
// //   function setup() {
// //     createCanvas(400, 400);
// //   }

// //   function draw() {
// //     frameRate(0.1);

// //     if (isSorted(list)) noLoop();

// //     for (j = 0; j < list.length - 1; j++) {
// //       if (list[j] > list[j + 1]) {
// //
// //
// //         temp = list[j];
// //         list[j] = list[j + 1];
// //         list[j + 1] = temp;
// //
// //       }
// //     }
// //   }

// //   function bubble_sort(list) {
// //     for (i = 0; i < list.length; i++) {}
// //   }

// function isSorted(list) {
//   let i = 0;
//   while (i < list.length - 1) {
//     if (list[i] > list[i + 1]) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// }
