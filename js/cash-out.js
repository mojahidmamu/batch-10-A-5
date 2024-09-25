
// card-1
document.getElementById('donate-btn-noakhali')
.addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('donate-input-1')
    const balance = getTextFiledValueById('account-balance')

    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;

});
// card-2
document.getElementById('donate-btn-feni')
.addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('donate-input-2')
    const balance = getTextFiledValueById('account-balance')

    if (cashOut <= 0) {
        console.log("Please type a valid positive number for donation.");
        return;
    }

    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;

});
// card-3
document.getElementById('donate-btn-qoute')
.addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('donate-input-3')
    const balance = getTextFiledValueById('account-balance')

    if (cashOut <= 0) {
        console.log("Please type a valid positive number for donation.");
        return;
    }

    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;

});