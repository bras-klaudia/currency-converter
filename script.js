let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let EUR = 4.4738;
let USD = 3.9117;
let GBP = 4.9309;
let CHF = 4.1677;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency = currencyElement.value;
  let amount = amountElement.value;
  let finalResult;

  switch (currency) {
    case "EUR":
      finalResult = +amount / EUR;
      break;
    case "USD":
      finalResult = +amount / USD;
      break;
    case "GBP":
      finalResult = +amount / GBP;
      break;
    case "CHF":
      finalResult = +amount / CHF;
      break;
  }
  resultElement.innerText = `${amount} PLN to w przeliczeniu  ${finalResult.toFixed(2)} ${currency}`;
});
