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
}

document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    updatePhoneTotal(true);
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    updatePhoneTotal(false);
  });
