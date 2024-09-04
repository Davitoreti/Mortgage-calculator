var inputMortgageAmount = document.getElementById('mortgageAmount');
var inputMortgageTerm = document.getElementById('mortgageTerm');
var inputInterestRate = document.getElementById('interestRate');
var button = document.getElementById('button-calculateRepayments');
var buttonClearAll = document.getElementById('button-clearAll');
var homePage = document.querySelector('.homePage');
var resultPage = document.querySelector('.resultPage');
var totalRefundAmount = document.getElementById('totalRefundAmount');
var totalInInstallments = document.getElementById('totalInInstallments');
var showPage = function showPage() {
  homePage.classList.add('hidden');
  resultPage.classList.remove('hidden');
  resultPage.classList.remove('md:hidden');
};
var maskCurrency = function maskCurrency(value) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};
button.addEventListener('click', function () {
  showPage();
  var mortgageAmount = parseFloat(inputMortgageAmount.value.replace(/[^\d.-]/g, '')) || 0;
  var mortgageTerm = parseInt(inputMortgageTerm.value) || 0;
  var interestRate = parseFloat(inputInterestRate.value) || 0;
  var monthlyInterestRate = interestRate / 100 / 12;
  var numberOfPayments = mortgageTerm * 12;
  var monthlyPayment;
  if (monthlyInterestRate > 0) {
    monthlyPayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    monthlyPayment = mortgageAmount / numberOfPayments;
  }
  var totalRefund = monthlyPayment * numberOfPayments;
  totalRefundAmount.textContent = maskCurrency(totalRefund);
  totalInInstallments.textContent = maskCurrency(monthlyPayment);
  if (isNaN(totalRefund) || isNaN(monthlyPayment)) {
    totalRefundAmount.innerText = '0,00';
    totalInInstallments.innerText = '0,00';
  }
});
var clearAll = function clearAll() {
  inputMortgageAmount.value = '';
  inputMortgageTerm.value = '';
  inputInterestRate.value = '';
  totalRefundAmount.textContent = '0,00';
  totalInInstallments.textContent = '0,00';
};
buttonClearAll.addEventListener('click', clearAll);