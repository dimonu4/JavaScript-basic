'usesrtrict';
for(i=0;i<=10;i++){
    if(i == 0){
        console.log(`${i}-это ноль`);
        continue;
    }
    if(i%2 != 0)
        console.log(`${i}-нечетное число`);
    if(i%2 == 0)
        console.log(`${i}-четное число`);
}