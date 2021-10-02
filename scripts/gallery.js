// const pictureInnerContainer = document.querySelector(
//   ".picture-inner-container"
// );
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");
let arr = [
  "assets/img/gallery/galery1.jpg",
  "assets/img/gallery/galery4.jpg",
  "assets/img/gallery/galery10.jpg",
  "assets/img/gallery/galery11.jpg",
  "assets/img/gallery/galery15.jpg",
  "assets/img/gallery/galery2.jpg",
  "assets/img/gallery/galery3.jpg",
  "assets/img/gallery/galery5.jpg",
  "assets/img/gallery/galery6.jpg",
  "assets/img/gallery/galery7.jpg",
  "assets/img/gallery/galery8.jpg",
  "assets/img/gallery/galery9.jpg",
  "assets/img/gallery/galery12.jpg",
  "assets/img/gallery/galery13.jpg",
  "assets/img/gallery/galery14.jpg",
];

function addDiv() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("blackDiv");
  column1.append(newDiv);
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function shuffleAppend() {
  //addDiv();
  let once = true;
  shuffleArray(arr);
  arr.map((element, index) => {
    // let img2 = new Image();
    // img2.src = element;
    // height += img2.height;
    // if (index > 8 && once) {
    //   addDiv();
    //   console.log(index, height);
    //   once = false;
    // }

    const img = document.createElement("img");
    img.src = element;
    img.alt = `galery` + index;
    if (index < 5) {
      column1.append(img);
    } else if (index < 9) column2.append(img);
    else column3.append(img);
  });
}

document.addEventListener("DOMContentLoaded", shuffleAppend);
