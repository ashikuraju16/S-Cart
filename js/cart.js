function getNumber(isIncrease) {
  const caseNumberField = document.getElementById("input-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newNumber;

  if (isIncrease === true) {
    newNumber = previousCaseNumber + 1;
  } else {
    newNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newNumber;
}

document
  .getElementById("input-btn-plus")
  .addEventListener("click", function () {
    getNumber(true);
  });
document
  .getElementById("input-btn-minus")
  .addEventListener("click", function () {
    getNumber(false);
  });
