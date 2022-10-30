{
    const calculateResult = (yourAmount, currency) => {
        const EUR = 4.80;
        const USD = 4.92;
        const CHF = 4.88;
        const GBP = 5.48;

        switch (currency) {
            case "EUR":
                return yourAmount / EUR;

            case "USD":
                return yourAmount / USD;

            case "CHF":
                return yourAmount / CHF;

            case "GBP":
                return yourAmount / GBP;
        }
    };

    const updateResultText = (yourAmount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const yourAmountElement = document.querySelector(".js-yourAmount");
        const currencyElement = document.querySelector(".js-currency");

        const yourAmount = yourAmountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(yourAmount, currency);

        updateResultText(yourAmount, result, currency);
    };


    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };

    init();
};



