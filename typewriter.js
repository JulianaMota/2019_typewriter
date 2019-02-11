"use strict";

const counter = 0;
const text = document.querySelector("#typewriter").textContent;

console.log(text);

let textcopy = " ";

function init() {
  document.querySelector("#typewriter").textContent = " ";
}

function loop() {
  const textL = text.length;
  console.log(textL);
  let counterText = text.split("");
  console.log(counterText[5]);

  for (let i = 0; i < counterText.length; i++) {
    //console.log(counterText[i]);
    let letter = counterText[i];
    textcopy = textcopy + letter;
    console.log(textcopy);
    document.querySelector("#typewriter").textContent = textcopy;
  }
  document.querySelector("#typewriter").textContent = " ";
}

init();
loop();
