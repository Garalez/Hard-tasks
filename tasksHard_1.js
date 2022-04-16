'use strict';

const tax = +prompt('Введите ваш заработок')

if (tax <= 15000) {
  console.log('Сумма налога: ' + tax * 0.13);
} else if (tax >= 15000 && tax <= 20000) {
  console.log('Сумма налога: ' + tax * 0.2);
} else if (tax >= 50000) {
  console.log('Сумма налога: ' + tax * 0.3);
}

