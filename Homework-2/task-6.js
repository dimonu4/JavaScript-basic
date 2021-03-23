'use strict';
let ending = "";
let sumMoney = Number(prompt("Введите количество денег, которое вы хотите положить на счет в банке")); 
let sumMoneyString = String(sumMoney);
let lengthSumMoney = sumMoneyString.length;
let charMoney = sumMoneyString.charAt(lengthSumMoney - 1);

switch (charMoney){
    case '0':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        ending = "рублей";
        break;
    case '1':
        ending = "рубль";
        break;
    case '2':
    case '3':
    case '4':
        ending = "рубля";
        break;
}

alert(`Ваша сумма в ${sumMoney} ${ending} успешно зачислена.`);