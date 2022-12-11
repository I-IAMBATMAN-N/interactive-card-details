"use strict";

const cardName = document.querySelector(".card-holder-name");
const inputName = document.querySelector("#card-holder-name-input");

const inputNumber = document.querySelector("#card-number-input");
const cardNumber = document.querySelector(".card-front-number");

const inputMonth = document.querySelector(".input-month");
const cardMonth = document.querySelector(".expiration-date-month");

const inputYear = document.querySelector(".input-year");
const cardYear = document.querySelector(".expiration-date-year");

const inputCvc = document.querySelector(".cvc");
const cardCvc = document.querySelector(".card-ccv");

const form = document.querySelector("#form");

const cardNumberArr = Array.from(JSON.stringify(cardNumber.innerText)).slice(
  1,
  -1
);

for (let i = 0; i < cardNumberArr.length; i++) {}
console.log("cna");
console.log(cardNumberArr);

let numberInputValue = "";
let numberInputValueArr = [];

let nameInputValue = "";
let nameInputValueArr = [];

// Form Prevent Default
//////////////////////////////////////////////////////
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cardNumberRefresh() {
  if (numberInputValueArr.length > 0) {
    for (let i = 0; i < 19; i++) {
      if (numberInputValueArr[i] > 0) {
        cardNumberArr[i] = JSON.stringify(numberInputValueArr[i]);
      }
      cardNumberArr[i] = numberInputValueArr[i];
      if (!numberInputValueArr[i] > 0) {
        if (i == 4 || i == 9 || i == 14) {
          cardNumberArr[i] = " ";
        } else {
          cardNumberArr[i] = JSON.stringify(0);
        }
      }
    }

    let str = "";

    cardNumberArr.forEach((e) => {
      str += e;
    });

    cardNumber.innerText = str;
  }
}

// INPUT EVENT LISTENERS
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Card Name Input
//////////////////////////////////////////////////////
inputName.addEventListener("input", function () {
  cardName.innerText = "";
  if (inputName.value.length === 0) {
    cardName.innerText = "";
    cardName.innerText = "Jane Appleseed";
  } else {
    nameInputValue = inputName.value;
    nameInputValueArr = [...nameInputValue];
    let str = "";
    for (let i = 0; i < nameInputValueArr.length; i++) {
      str += nameInputValueArr[i];
    }
    cardName.innerText = str;
  }
});

// Card Number Input
//////////////////////////////////////////////////////
inputNumber.addEventListener("input", function () {
  numberInputValue = JSON.stringify(inputNumber.value);
  const arr = numberInputValue.slice(1, -1);
  numberInputValueArr = [...arr];
  cardNumberRefresh();
});

// Card Month Input
//////////////////////////////////////////////////////

inputMonth.addEventListener("input", function () {
  if (inputMonth.value.length === 0) {
    console.log("olalaaaa");
    cardMonth.innerHTML = "00";
  } else {
    const month = inputMonth.value;
    cardMonth.innerHTML = month;
  }
});

inputYear.addEventListener("input", function () {
  if (inputYear.value.length === 0) {
    cardYear.innerHTML = "00";
  } else {
    const year = inputYear.value;
    cardYear.innerHTML = year;
  }
});

inputCvc.addEventListener("input", function () {
  if (inputCvc.value.length === 0) {
    cardCvc.innerHTML = "000";
  } else {
    const cvc = inputCvc.value;
    cardCvc.innerHTML = cvc;
  }
});
// Card Year Input
//////////////////////////////////////////////////////
