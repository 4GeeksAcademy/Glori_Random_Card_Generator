/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let chooseSymbol = SymbolGenerator();
  document.getElementById("Symbol").innerHTML = chooseSymbol;
  document.getElementById("symbolDown").innerHTML = chooseSymbol;
  document.getElementById("genNumber").innerText = numberGenerator();
};

let numberGenerator = function() {
  let number = ["A", "1", "2", "3", "4", "5", "6", "7"];
  let numeroRandom = [Math.floor(Math.random() * number.length)];
  return number[numeroRandom];
};
let SymbolGenerator = function() {
  let symbolOne = ["❤️", "♦", "♣", "♠"];
  let simboloUp = [Math.floor(Math.random() * symbolOne.length)];
  return symbolOne[simboloUp];
};
