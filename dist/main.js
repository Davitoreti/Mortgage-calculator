/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var inputMortgageAmount = document.getElementById('mortgageAmount');\nvar inputMortgageTerm = document.getElementById('mortgageTerm');\nvar inputInterestRate = document.getElementById('interestRate');\nvar button = document.getElementById('button-calculateRepayments');\nvar buttonClearAll = document.getElementById('button-clearAll');\nvar homePage = document.querySelector('.homePage');\nvar resultPage = document.querySelector('.resultPage');\nvar totalRefundAmount = document.getElementById('totalRefundAmount');\nvar totalInInstallments = document.getElementById('totalInInstallments');\nvar showPage = function showPage() {\n  homePage.classList.add('hidden');\n  resultPage.classList.remove('hidden');\n  resultPage.classList.remove('md:hidden');\n};\nvar maskCurrency = function maskCurrency(value) {\n  return value.toLocaleString('pt-BR', {\n    minimumFractionDigits: 2,\n    maximumFractionDigits: 2\n  });\n};\nbutton.addEventListener('click', function () {\n  showPage();\n  var mortgageAmount = parseFloat(inputMortgageAmount.value.replace(/[^\\d.-]/g, '')) || 0;\n  var mortgageTerm = parseInt(inputMortgageTerm.value) || 0;\n  var interestRate = parseFloat(inputInterestRate.value) || 0;\n  var monthlyInterestRate = interestRate / 100 / 12;\n  var numberOfPayments = mortgageTerm * 12;\n  var monthlyPayment;\n  if (monthlyInterestRate > 0) {\n    monthlyPayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);\n  } else {\n    monthlyPayment = mortgageAmount / numberOfPayments;\n  }\n  var totalRefund = monthlyPayment * numberOfPayments;\n  totalRefundAmount.textContent = maskCurrency(totalRefund);\n  totalInInstallments.textContent = maskCurrency(monthlyPayment);\n  if (isNaN(totalRefund) || isNaN(monthlyPayment)) {\n    totalRefundAmount.innerText = '0,00';\n    totalInInstallments.innerText = '0,00';\n  }\n});\nvar clearAll = function clearAll() {\n  inputMortgageAmount.value = '';\n  inputMortgageTerm.value = '';\n  inputInterestRate.value = '';\n  totalRefundAmount.textContent = '0,00';\n  totalInInstallments.textContent = '0,00';\n};\nbuttonClearAll.addEventListener('click', clearAll);\n\n//# sourceURL=webpack://mortgage-calculator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;