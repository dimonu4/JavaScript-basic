'usestrict';
const products = [
     {
          id: 3,
          price: 200,
     },
     {
          id: 4,
          price: 900,
     },
     {
          id: 1,
          price: 1000,
     },
 ];

 products.forEach(function(item){
     item.price = item.price + (15*item.price)/100;
 });
 
 for(let i of products){
 console.log(i.price);
 }