// step-1:
function getInput(firstInput){
  const inputField =  document.getElementById(firstInput);
  const inputText = inputField.value;
  const inputAmount = parseFloat(inputText);

inputField.value = '';
  return inputAmount;
}

// step-2:
function updateTotal(updateId, newDepositeAmount){
  const oldDepositeTotal =  document.getElementById(updateId);
  const oldDepositeText = oldDepositeTotal.innerText;
  const oldDepositeAmount = parseFloat(oldDepositeText);
  oldDepositeTotal.innerText = oldDepositeAmount + newDepositeAmount;
}

// step-3:
function getCurrentBalance(){
  const balanceTotal =  document.getElementById('total-balance');
  const balanceText = balanceTotal.innerText;
   const balanceAmount = parseFloat(balanceText);
   return balanceAmount; 
}

// step-4:
function updateBalnce(amount, isAdd){
    const balanceTotal =  document.getElementById('total-balance');
    const balanceTotalAmount = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + amount;
    }else{
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}









// deposite
document.getElementById('deposite-btn').addEventListener('click', function(){
   const newDepositeAmount = getInput('input-deposit');
//    Amount 0 thaka boro hola kaj korba
   if(newDepositeAmount > 0){
    updateTotal('total-deposite', newDepositeAmount);
    updateBalnce(newDepositeAmount,true);
   }
    
})

// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawInputAmount = getInput('input-withdraw');
   const currentBalance = getCurrentBalance();
   if(withdrawInputAmount > 0 && withdrawInputAmount < currentBalance){
    updateTotal('total-withdraw', withdrawInputAmount);
    updateBalnce(withdrawInputAmount,false);
   }
   if(withdrawInputAmount > currentBalance){
   const error = document.getElementById('withdraw-error');
   error.innerText = 'This amount not available';
   }
  
})


