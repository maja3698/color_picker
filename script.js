"use strict";

document.querySelector("#btn").addEventListener("click", getColor);

const colorvalue = document.querySelector("#color").value;

let r = colorvalue.substring(1, 3);
console.log(r);

let g = colorvalue.substring(3, 5);
console.log(g);

let b = colorvalue.substring(5);
console.log(b);

let rValue = parseInt(r, 16);
console.log("R value is", rValue);
let gValue = parseInt(g, 16);
console.log("G value is", gValue);
let bValue = parseInt(b, 16);
console.log("B value is", bValue);

function getColor() {
  console.log(colorvalue);
  displayHex();
}

function displayHex() {
  document.querySelector("#hex").textContent = colorvalue;
  displayRgb();
}

function displayRgb() {
  let textValue = rValue.toString() + ", " + gValue.toString() + ", " + bValue.toString();
  console.log(textValue);
  document.querySelector("#rgbcode").textContent = textValue;

  //   document.querySelector("#rgbcode").innerHTML = rgbValue;

  displayHsl();
}

function displayHsl() {
  let h, s, l;

  const min = Math.min(rValue, gValue, bValue);
  const max = Math.max(rValue, gValue, bValue);

  if (max === min) {
    h = 0;
  } else if (max === rValue) {
    h = 60 * (0 + (gValue - bValue) / (max - min));
  } else if (max === gValue) {
    h = 60 * (2 + (bValue - rValue) / (max - min));
  } else if (max === bValue) {
    h = 60 * (4 + (rValue - gValue) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  document.querySelector("#h").textContent = h;
  document.querySelector("#s").textContent = s;
  document.querySelector("#l").textContent = l;
}

// function displayRgb() {
//     document.querySelector("#rgb").innerHTML = `(${rValue}, ${gValue}, ${bValue})`;

//   }

// let numberAsHex = "ff";
// let numberAsInteger = parseInt(r, 16);
// console.log("numberAsInteger", numberAsInteger);

// let someNumberAsInteger = 255;
// let someBAse16NumberAsString = someNumberAsInteger.toString(16);
// console.log("someBAse16NumberAsString", someBAse16NumberAsString);
// let simpleNumberAsString = "234";
// let simpleNumber = parseInt(numberAsString);console.log(simpleNumber);
