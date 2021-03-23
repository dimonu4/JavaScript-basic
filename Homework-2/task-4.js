'use strict';
/**
 * Функция сложения
 * @param {number} a Первое число 
 * @param {number} b Второе число
 * @returns {number} Результат сложения
 */
function operationPlus(a,b) {
    return a + b;
}

/**
 * Функция вычитания второго числа из первого
 * @param {number} a Первое число 
 * @param {number} b Второе число
 * @returns {number} Результат вычитания
 */
 function operationMinus(a,b) {
    return a - b;
}

/**
 * Функция умножения
 * @param {number} a Первое число 
 * @param {number} b Второе число
 * @returns {number} Результат умножения
 */
 function operationMultiply(a,b) {
    return a * b;
}

/**
 * Функция деления первого числа на второе
 * @param {number} a Первое число 
 * @param {number} b Второе число
 * @returns {number} Результат деления
 */
 function operationDivide(a,b) {
    return a / b;
}

let result = operationMultiply(2,3);
alert(result);