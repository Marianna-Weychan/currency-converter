let formElement = document.querySelector(".js-form");
let yourAmountElement = document.querySelector(".js-yourAmount");
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result");

let EUR = 4.80;
let USD = 4.92;
let CHF = 4.88;
let GBP = 5.48;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let yourAmount = yourAmountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = yourAmount / EUR;
            break;

        case "USD":
            result = yourAmount / USD;
            break;

        case "CHF":
            result = yourAmount / CHF;
            break;

        case "GBP":
            result = yourAmount / GBP;
            break;
    }

    resultElement.innerText = result.toFixed(2);
});











