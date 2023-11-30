document
  .getElementById("input-btn-plus")
  .addEventListener("click", function () {
    const caseNumberField = document.getElementById("input-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newNumber = previousCaseNumber + 1;

    caseNumberField.value = newNumber;
  });
  document
  .getElementById("input-btn-minus")
  .addEventListener("click", function () {
    const caseNumberField = document.getElementById("input-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newNumber = previousCaseNumber - 1;

    caseNumberField.value = newNumber;
  });

