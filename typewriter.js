"use strict";

//window.addEventListener("DOMContentLoaded", init);

document.querySelector("button").addEventListener("click", init);

const text = document.querySelector("#typewriter").textContent;
let counter = 0;
const textL = text.length;
//console.log(text);
let spaceSound = new Audio("typespace.mp3");
let sound1 = new Audio("typekey1.mp3");
let sound2 = new Audio("typekey2.mp3");
document.querySelector("#typewriter").textContent = " ";
console.log(spaceSound, sound1, sound2);

//let textcopy = " ";

function init() {
  //console.log(textL);
  document.querySelector("button").classList.add("hide");

  loop();
}

function loop() {
  let counterText = text.slice(0, counter + 1);
  let counterAudio = counterText.slice(counter);
  //console.log(counterText);
  counter++;

  /*for (let i = 0; i < counterText.length; i++) {
    //console.log(counterText[i]);
    let letter = counterText[i];
    textcopy = textcopy + letter;
    console.log(textcopy);
    document.querySelector("#typewriter").textContent = textcopy;
  }*/

  console.log(counterAudio);

  if (counterAudio == " ") {
    spaceSound.play();
  } else if (counterAudio == "t") {
    sound1.play();
  } else {
    sound2.play();
  }

  document.querySelector("#typewriter").textContent = counterText;

  if (counter != textL) {
    setTimeout(loop, 300);
  }
}
