document.getElementById("deposite-btn").addEventListener("click", function () {
  //   console.log("deposite kor taratari");
  const depositeInput = document.getElementById("deposite");
  const newdepositeAmount = depositeInput.value;
  const newdepositAmountfloat = parseFloat(newdepositeAmount);
  // console.log(depositeAmount);

  const amountDeposit = document.getElementById("d-amount");
  //   const amountOfDeposit = amountDeposit.innerText;

  const previousDeposit = amountDeposit.innerText;
  const previousTotal = parseFloat(previousDeposit);
  const newdepositAmount = parseFloat(previousTotal + newdepositAmountfloat);
  amountDeposit.innerText = newdepositAmount;

  /* console.log(currentDeposit); */

  // Update Account Balance

  const banalceTotal = document.getElementById("update-amount");
  const banalceTotalText = banalceTotal.innerText;
  const previousBanalceTotal = parseFloat(banalceTotalText);
  const newBanalceTotal = previousBanalceTotal + newdepositAmount;
  banalceTotal.innerText = newBanalceTotal;

  // clear the input- box,when the went to input.
  depositeInput.value = "";
});

// Withdraw Part Handle And Draw

document.getElementById("withdrow-btn").addEventListener("click", function () {
  // console.log("Please Click this button");

  const withdrawInput = document.getElementById("withdrow-input");
  const withdrawTotalText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawTotalText);
  console.log(withdrawAmount);

  // set the Withdraw Total

  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawTotalTexts = withdrawTotal.innerText;
  const previousWithDrawTotal = parseFloat(previousWithdrawTotalTexts);
  const TotalWithDraw = previousWithDrawTotal + withdrawAmount;
  withdrawTotal.innerText = TotalWithDraw;

  // set Total Decress Balance
  const banalceTotal = document.getElementById("update-amount");
  const previousBalanceText = banalceTotal.innerText;
  const previousBanalceTotal = parseFloat(previousBalanceText);
  const BanalceDecress = previousBanalceTotal - withdrawAmount;
  banalceTotal.innerText = BanalceDecress;

  // Clear Withdraw Input Type
  withdrawInput.value = "";
});
