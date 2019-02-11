"use strict";

window.addEventListener("DOMContentLoaded", init);

const text = document.querySelector("#typewriter").textContent;
let counter = 0;
const textL = text.length;
console.log(text);
let spaceSound = new Audio("typespace.mp3");
console.log(spaceSound);

//let textcopy = " ";

function init() {
  document.querySelector("#typewriter").textContent = " ";

  console.log(textL);

  loop();
}

function loop() {
  let counterText = text.slice(0, counter + 1);
  //console.log(counterText);
  counter++;

  /*for (let i = 0; i < counterText.length; i++) {
    //console.log(counterText[i]);
    let letter = counterText[i];
    textcopy = textcopy + letter;
    console.log(textcopy);
    document.querySelector("#typewriter").textContent = textcopy;
  }*/

  document.querySelector("#typewriter").textContent = counterText;

  if (counter != textL) {
    setTimeout(loop, 300);
  }
}
