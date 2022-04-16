'use strict';

const tax = +prompt('Введите ваш заработок');
let taxNumber;

if (tax <= 15000) {
  let taxNumber = tax * 0.13;
  console.log(`Сумма налога: ${taxNumber}`);
} else if (tax >= 15000 && tax <= 50000) {
  let taxNumber = (tax - 15000) * 0.2 + 1950;
  console.log(`Сумма налога: ${taxNumber}`);
} else if (tax >= 50000) {
  let taxNumber = (tax - 50000) * 0.3 + 16950;
  console.log(`Сумма налога: ${taxNumber}`);
}
