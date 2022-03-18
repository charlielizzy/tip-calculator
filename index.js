let totalBill;
let totalTip;
let totalPeople = 1;
let tipPerPerson;
let billPerPerson;

const validateInput = (totalBill, totalTip, totalPeople) => {
  return (
    typeof totalBill !== undefined &&
    typeof totalTip !== undefined &&
    typeof totalPeople !== undefined
  );
};

const billAmount = document.getElementById("bill-amount");
billAmount.addEventListener("input", (event) => {
  totalBill = Number(event.target.value);
  if (validateInput(totalBill, totalTip, totalPeople) === true) {
    const tipHTMLElement = document.getElementById("tip-pp");
    const billHTMLElement = document.getElementById("total-pp");
    tipPerPerson = calculateTipPerPerson(totalBill, totalTip, totalPeople);
    billPerPerson = calculateBillPerPerson(totalBill, totalTip, totalPeople);
    tipHTMLElement.innerText = `$${tipPerPerson.toFixed(2)}`;
    billHTMLElement.innerText = `$${billPerPerson.toFixed(2)}`;
  }
});

const tipButtons = document.querySelectorAll(".tip-button");
tipButtons.forEach((tipbutton) => {
  tipbutton.addEventListener("click", (event) => {
    totalTip = Number(event.target.value);
    if (validateInput(totalBill, totalTip, totalPeople) === true) {
      const tipHTMLElement = document.getElementById("tip-pp");
      const billHTMLElement = document.getElementById("total-pp");
      tipPerPerson = calculateTipPerPerson(totalBill, totalTip, totalPeople);
      billPerPerson = calculateBillPerPerson(totalBill, totalTip, totalPeople);
      tipHTMLElement.innerText = `$${tipPerPerson.toFixed(2)}`;
      billHTMLElement.innerText = `$${billPerPerson.toFixed(2)}`;
    }
  });
});

const numberOfPeople = document.getElementById("number-of-people");
numberOfPeople.addEventListener("change", (event) => {
  totalPeople = Number(event.target.value);
  if (validateInput(totalBill, totalTip, totalPeople) === true) {
    const tipHTMLElement = document.getElementById("tip-pp");
    const billHTMLElement = document.getElementById("total-pp");
    tipPerPerson = calculateTipPerPerson(totalBill, totalTip, totalPeople);
    billPerPerson = calculateBillPerPerson(totalBill, totalTip, totalPeople);
    tipHTMLElement.innerText = `$${tipPerPerson.toFixed(2)}`;
    billHTMLElement.innerText = `$${billPerPerson.toFixed(2)}`;
  }
});

const calculateTipPerPerson = (bill, tip, people) => {
  return (bill * tip) / people;
};

const calculateBillPerPerson = (bill, tip, people) => {
  return (bill + tip) / people;
};
