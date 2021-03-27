'usestrict';
const products = [
     { 
         id: 3,
         price: 127,
         photos: [
              "1.jpg",
              "2.jpg", 
        ]
     },
     {
          id: 5,
          price: 499,
          photos: []
     },
     {
          id: 10,
          price: 26,
          photos: [
               "3.jpg"
          ]
     },
     {
          id: 8,
          price: 78,
     },
 ];

//  1)
 let productsPhoto = products.filter(function(item){
     return "photos" in item && item.photos.length>0;
 });


 for(let element of productsPhoto){
     for(let property in element){
         console.log(property + ": " +element[property]);
     }
 }

 //2) 
 products.sort(function(a,b){
      return a.price-b.price;
 });

 for(let element of products){
     for(let property in element){
          console.log(property + ": " + element[property]);
     }
 }
 