"use strict";
let num = 0;
const arr = [num];

arrayCounter();

function arrayCounter() {
  num++;
  console.log(arr);
  arr.unshift(num);

  if (arr.length === 10) {
    arr.pop();
  }

  setTimeout(function () {
    arrayCounter();
  }, 1000);
}
