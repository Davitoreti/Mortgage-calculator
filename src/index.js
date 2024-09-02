let inputMortgageAmount = document.getElementById('mortgageAmount');
let inputMortgageTerm = document.getElementById('mortgageTerm');
let inputInterestRate = document.getElementById('interestRate');
const button = document.getElementById('button-calculateRepayments');
const buttonClearAll = document.getElementById('button-clearAll');
let homePage = document.querySelector('.homePage');
let resultPage = document.querySelector('.resultPage');
let totalRefundAmount = document.getElementById('totalRefundAmount');
let totalInInstallments = document.getElementById('totalInInstallments');

const showPage = () => {
    homePage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    resultPage.classList.remove('md:hidden');
}

const maskCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

button.addEventListener('click', () => {

    showPage();

    const mortgageAmount = parseFloat(inputMortgageAmount.value.replace(/[^\d.-]/g, '')) || 0;
    const mortgageTerm = parseInt(inputMortgageTerm.value) || 0;
    const interestRate = parseFloat(inputInterestRate.value) || 0;

    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = mortgageTerm * 12;

    let monthlyPayment;
    if (monthlyInterestRate > 0) {
        monthlyPayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
        monthlyPayment = mortgageAmount / numberOfPayments;
    }

    const totalRefund = monthlyPayment * numberOfPayments;

    totalRefundAmount.textContent = maskCurrency(totalRefund);
    totalInInstallments.textContent = maskCurrency(monthlyPayment);

    if (isNaN(totalRefund) || isNaN(monthlyPayment)) {
        totalRefundAmount.innerText = '0,00';
        totalInInstallments.innerText = '0,00';
    }
});

const clearAll = () => {
    inputMortgageAmount.value = '';
    inputMortgageTerm.value = '';
    inputInterestRate.value = '';

    totalRefundAmount.textContent = '0,00';
    totalInInstallments.textContent = '0,00';
}  

buttonClearAll.addEventListener('click', clearAll);
