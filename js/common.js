function updateValue(inputId, isIncrease, price, priceElementId) {
  const getInput = document.getElementById(inputId);
  const getInputValueString = getInput.value;
  const inputValue = parseInt(getInputValueString);

  if (isIncrease) {
    const newInputValue = inputValue + 1;
    getInput.value = newInputValue;

    const totalPrice = newInputValue * price;
    const priceElementTarget = document.getElementById(priceElementId);
    priceElementTarget.innerText = totalPrice;
  } else {
    if (inputValue <= 1) {
      return;
    } else {
      const newInputValue = inputValue - 1;
      getInput.value = newInputValue;

      const totalPrice = newInputValue * price;
      const priceElementTarget = document.getElementById(priceElementId);
      priceElementTarget.innerText = totalPrice;
    }
  }
}

//  Get Element and Value then convert value string to number

function getElementNumberValue(elementId) {
  const getElement = document.getElementById(elementId);
  const getElementString = getElement.innerText;
  const getValueNumber = parseInt(getElementString);
  return getValueNumber;
}

function subtotal(elementOne, elementTwo, subtotal, tax, totalPrice) {
  const getElementOne = getElementNumberValue(elementOne);
  const getElementTwo = getElementNumberValue(elementTwo);

  const calculetSubtotal = getElementOne + getElementTwo;

  const subtotalValue = document.getElementById(subtotal);
  subtotalValue.innerText = calculetSubtotal;

  const taxTotal = parseFloat((calculetSubtotal * 0.1).toFixed(2));
  const getTaxElement = document.getElementById(tax);
  getTaxElement.innerText = taxTotal;

  const finalPrice = Math.round(calculetSubtotal + taxTotal);
  const finalPriceElement = document.getElementById(totalPrice);
  finalPriceElement.innerText = finalPrice;
}

document.getElementById("check-out").addEventListener("click", function () {
  alert("Purchase Successfull");
});
