"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - (4 * a * c);

 if (discriminant === 0) {
		arr[0] = -b / (2 * a);

	} else if (discriminant > 0) {
		arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a)
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let loanBody; // тело кредита 
	let percentOfMonth; //месячная ставка
	let monthlyPayment; // ежемесячный платеж
	let totalPay; //общая сумма кредита строкое значение
	// let totalPayResualt; // результат в цисловом значение  

	percentOfMonth = (percent / 100) / 12; // ежемесячная ставка
	loanBody = amount - contribution;
	monthlyPayment = loanBody * (percentOfMonth + (percentOfMonth / (((1 + percentOfMonth) ** countMonths) - 1)));
	totalPay = monthlyPayment * countMonths;

	return Number(totalPay.toFixed(2))



}