'use strict';

const getMinNumber = () => {
  const a = +prompt('Введите первое число');
  const b = +prompt('Введите второе число');
  
  a < b && console.log('Минимальное число: ', a);
  b < a && console.log('Минимальное число: ', b);
}
getMinNumber()