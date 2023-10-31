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

const inputs = document.querySelectorAll("form input");

for (let i = 0; i < cardNumberArr.length; i++) {}
// console.log("cna");
// console.log(cardNumberArr);

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

function cardInputChecker() {}

// INPUT EVENT LISTENERS
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Card Name Input
//////////////////////////////////////////////////////
inputName.addEventListener("input", function (e) {
  if (regExpNum.test(inputName.value)) {
    alert("Incorrect key in Card name");
    inputName.value = inputName.value.slice(0, -1);
  }

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
inputNumber.addEventListener("input", function (event) {
  if (regExpStr.test(inputNumber.value) || regExpStr2.test(inputNumber.value)) {
    alert("Incorrect key in Card number");
    inputNumber.value = inputNumber.value.slice(0, -1);
  }
  if (
    inputNumber.value.length === 4 ||
    inputNumber.value.length === 9 ||
    inputNumber.value.length === 14
  ) {
    inputNumber.value += " ";
  }
  numberInputValue = JSON.stringify(inputNumber.value);
  const arr = numberInputValue.slice(1, -1);
  numberInputValueArr = [...arr];
  cardNumberRefresh();
});

inputNumber.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    if (numberInputValueArr[numberInputValueArr.length - 1] === " ") {
      numberInputValueArr = numberInputValueArr.slice(0, -1);

      // console.log(numberInputValueArr);
      cardNumberRefresh();
      // console.log(
      //   "substr",
      //   inputNumber.value.substr(0, inputNumber.value.length - 1)
      // );
      inputNumber.value = inputNumber.value.substr(
        0,
        inputNumber.value.length - 1
      );
    }
  }
  // console.log(numberInputValueArr);
  // if(){

  // }
});

// Card Month Input
//////////////////////////////////////////////////////

inputMonth.addEventListener("input", function () {
  //
  if (regExpStr.test(inputMonth.value) || regExpStr2.test(inputMonth.value)) {
    alert("Incorrect key in Card month");
    inputMonth.value = inputMonth.value.slice(0, -1);
  }
  if (inputMonth.value.length === 0) {
    cardMonth.innerHTML = "00";
  } else if (inputMonth.value.length === 3) {
    inputMonth.value = inputMonth.value.slice(0, -1);
  } else {
    const month = inputMonth.value;
    cardMonth.innerHTML = month;
  }
});
inputYear.addEventListener("input", function () {
  //
  if (regExpStr.test(inputYear.value) || regExpStr2.test(inputYear.value)) {
    alert("Incorrect key in Card year");
    inputYear.value = inputYear.value.slice(0, -1);
  }
  if (inputYear.value.length === 0) {
    cardYear.innerHTML = "00";
  } else if (inputYear.value.length === 3) {
    inputYear.value = inputYear.value.slice(0, -1);
  } else {
    const year = inputYear.value;
    cardYear.innerHTML = year;
  }
});
inputCvc.addEventListener("input", function () {
  if (regExpStr.test(inputCvc.value) || regExpStr2.test(inputCvc.value)) {
    alert("Incorrect key in Card cvc");
    inputCvc.value = inputCvc.value.slice(0, -1);
  }
  if (inputCvc.value.length === 0) {
    cardCvc.innerHTML = "000";
  } else if (inputCvc.value.length === 4) {
    inputCvc.value = inputCvc.value.slice(0, -1);
  } else {
    const cvc = inputCvc.value;
    cardCvc.innerHTML = cvc;
  }
});
// Card Year Input
//////////////////////////////////////////////////////

const confirmButton = document.querySelector("article form button");
const thankYouSection = document.querySelector(".thank-you");

const regExpNum = /[0-9]/;

const regExpStr = /[a-záéíóúàèìòùäëïöüěščřžýůú=+-.,]/;
const regExpStr2 = /[A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜĚŠČŘŽÝŮÚ=+-.,]/;

let elArr = [form, thankYouSection];

confirmButton.addEventListener("click", function () {
  //
  const incorrectFields = [];

  // if (regExpNum.test(inputName.value)) {
  //   incorrectFields.push("Card name");
  // }
  // if (regExpStr.test(inputNumber.value) || regExpStr2.test(inputNumber.value)) {
  //   incorrectFields.push("Card number");
  // }
  // if (regExpStr.test(inputMonth.value) || regExpStr2.test(inputMonth.value)) {
  //   incorrectFields.push("Card month");
  // }
  // if (regExpStr.test(inputYear.value) || regExpStr2.test(inputYear.value)) {
  //   incorrectFields.push("Card year");
  // }
  // if (regExpStr.test(inputCvc.value) || regExpStr2.test(inputCvc.value)) {
  //   incorrectFields.push("Card cvc");
  // }

  if (incorrectFields.length) {
    alert(`Please fill corectly fields:\n${[...incorrectFields]}`);
  } else if (!incorrectFields.length) {
    //
    elArr.forEach((element) => {
      element.classList.toggle("d-none");
    });
  }
});
