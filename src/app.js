/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  // arrays con las excusas

  let who = [
    "el ladron",
    "la mazucamba",
    "el pajaro guarandol",
    "John Deer",
    "La guitarra",
    "El apartamento"
  ];
  let action = [
    "se fundió",
    "se lo llevó",
    "se prendió",
    "se fulminó",
    "se activó",
    " desapareció"
  ];
  let place = [
    "en la casa",
    "en el patio",
    "en la calle",
    "en el coche",
    "en la sala",
    "en el cerro"
  ];

  // generar numeros random

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomPlace = Math.floor(Math.random() * place.length);

  // unir conceptos

  document.querySelector("#excuse").innerHTML =
    who[randomWho] + " " + action[randomAction] + " " + place[randomPlace];
};
