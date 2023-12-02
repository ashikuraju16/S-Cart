function updateCaseTotal(isIncrease) {
  const newCaseNumberField = document.getElementById("input-field");
  const newCaseNumberString = newCaseNumberField.value;
  const previousCaseNumber = parseInt(newCaseNumberString);

  let newCaseNumber;

  if (isIncrease) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }

  newCaseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
  const newTotalPrice = newCaseNumber * 59;
  const newTotalElement = document.getElementById("case-total");
  newTotalElement.innerText = newTotalPrice;
}

document
  .getElementById("input-btn-plus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseTotal(true);

    updateCaseTotalPrice(newCaseNumber);
  });

document
  .getElementById("input-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseTotal(false);

    updateCaseTotalPrice(newCaseNumber);
  });
