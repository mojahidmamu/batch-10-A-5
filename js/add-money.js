
// card-1
document.getElementById('donate-btn-noakhali').addEventListener('click', function (event) {
  event.preventDefault();  // Prevents form submission and page reload

  const addInputMoney = getInputFieldValueById('donate-input-1');
  const donateBalance = getTextFiledValueById('donate-balance');

  if (isNaN(addInputMoney) || addInputMoney <= 0) {
      alert("Please type a valid positive number.");
      return;
  }

  const newBalance = donateBalance + addInputMoney;
  document.getElementById('donate-balance').innerText = newBalance;

  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.push({
      amount: addInputMoney,
      cause: "Donate for Flood at Noakhali, Bangladesh",
      date: new Date().toLocaleString(),
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));
 

  document.getElementById('donate-input-1').value = '';


  my_modal_1.showModal();
});



// card-2
document.getElementById('donate-btn-feni').addEventListener('click', function (event) {
  event.preventDefault();

  const addInputMoney = getInputFieldValueById('donate-input-2');
  const donateBalance = getTextFiledValueById('donate-balance-2');

  if (isNaN(addInputMoney) || addInputMoney <= 0) {
      alert("Please type a valid positive number.");
      return;
  }

  const newBalance = donateBalance + addInputMoney;
  document.getElementById('donate-balance-2').innerText = newBalance;


  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.push({
      amount: addInputMoney,
      cause: "Donate for Flood at Noakhali, Bangladesh",
      date: new Date().toLocaleString(),
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));
  my_modal_2.showModal();

});


// card-3
document.getElementById('donate-btn-qoute').addEventListener('click', function (event) {
  event.preventDefault();

  const addInputMoney = getInputFieldValueById('donate-input-3');
  const donateBalance = getTextFiledValueById('donate-balance-3');

  if (isNaN(addInputMoney) || addInputMoney <= 0) {
      alert("Please type a valid positive number.");
      return;
  }

  const newBalance = donateBalance + addInputMoney;
  document.getElementById('donate-balance-3').innerText = newBalance;


  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.push({
      amount: addInputMoney,
      cause: "Donate for Flood at Noakhali, Bangladesh",
      date: new Date().toLocaleString(),
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));
 
  my_modal_3.showModal();
});