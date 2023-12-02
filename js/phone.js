function updatePhoneTotal(isIncrease) {
  const newPhoneNumberField = document.getElementById("phone-input-field");
  const newPhoneNumberString = newPhoneNumberField.value;
  const previousPhoneTotal = parseInt(newPhoneNumberString);

  let newPhoneTotal;

  if (isIncrease) {
    newPhoneTotal = previousPhoneTotal + 1;
  } else {
    newPhoneTotal = previousPhoneTotal - 1;
  }

  newPhoneNumberField.value = newPhoneTotal;
  return newPhoneTotal;
}

function getPhoneTotal(newPhoneTotal) {
  const phoneTotalPrice = newPhoneTotal * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerText = phoneTotalPrice;
}

document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const newPhoneTotal = updatePhoneTotal(true);

    getPhoneTotal(newPhoneTotal);
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newPhoneTotal = updatePhoneTotal(false);
    getPhoneTotal(newPhoneTotal );
  });
