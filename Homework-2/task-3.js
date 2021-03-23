'use strict';
let a = 8;
let b = -2;

if(a >= 0 && b >= 0){
    alert(a - b);
} else if(a < 0 && b < 0){
    alert(a * b);
} else if(a < 0 && b >=0 || a >=0 && b < 0){
    alert(a + b);
}