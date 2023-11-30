document
  .getElementById("input-btn-plus")
  .addEventListener("click", function () {
    const caseNumberField = document.getElementById("input-field");
    const caseNumberFieldString = caseNumberField.value;
    const previouseCaseNumber = parseFloat(caseNumberFieldString);

    const newNumber = previouseCaseNumber + 1;
    caseNumberField.value = newNumber;
  });

  document
 .getElementById("input-btn-minus").addEventListener("click", function (){
    const caseNumberField = document.getElementById("input-field");
    const caseNumberFieldString = caseNumberField.value;
    const previouseCaseNumber = parseFloat(caseNumberFieldString);

    const newNumber = previouseCaseNumber - 1;
    caseNumberField.value = newNumber;
 
 })