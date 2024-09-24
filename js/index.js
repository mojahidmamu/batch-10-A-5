//  getting all the value
const accountBalance = parseFloat(document.getElementById('account-balance').value);
const donationBalance1 = parseFloat(document.getElementById('donation-balance-1').value);
const donationBalance2 = parseFloat(document.getElementById('donation-balance-2').value);
const donationBalance3 = parseFloat(document.getElementById('donation-balance-3').value);

// add event listenet for calculate 
// donateButton.addEventListener('click', function () {
//   const totalBalance1 = accountBalance - donationBalance1;
//   const totalBalance2 = accountBalance - donationBalance2;
//   const totalBalance3 = accountBalance - donationBalance3;
// })

// history button functionality
const donateButton =document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');
historyButton.addEventListener('click', function(){
  historyButton.classList.add(
    "bg-[#B4F461]"
  );
   donateButton.classList.remove(
     "bg-[#B4F461]"
   );
     document.getElementById('main-section').classList.add('hidden');
     document.getElementById('history-tab').classList.remove('hidden');
});

donateButton.addEventListener('click', function(){
     historyButton.classList.remove(
       "bg-[#B4F461]"
     );
     donateButton.classList.add(
       "bg-[#B4F461]"
     );
     document.getElementById('main-section').classList.remove('hidden');
     document.getElementById('history-tab').classList.add('hidden');
});
