'use strict';
/**
 * Функция математических операций с двумя числами а и b
 * @param {number} arg1 Первое число
 * @param {number} arg2 Второе число
 * @param {Text} operation Математический оператор "plus", "minus", "multiply" или "divide"
 * @returns 
 */
function mathOperation(arg1,arg2, operation){
    switch (operation){
        case "plus":
            return arg1 + arg2;
        case "minus":
            return arg1 - arg2;
        case "multiply":
            return arg1 * arg2;
        case "divide":
            return arg1 / arg2;
    }
}

let result = mathOperation(12,3, "minus");
alert(result);