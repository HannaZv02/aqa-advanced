 function checkOrder (available, ordered) {
   if (ordered === 0) {
     console.log("Your order is empty");
     return 1;
   } else if (ordered > available) {
     console.log("Your order is too large, we don’t have enough goods");
     return  2;
   } else {
     console.log("Your order is accepted");
     return  3; 
   }
 }

 console.log(checkOrder(0, 300)); // "Для проведення операції введіть суму більшу за нуль"
 console.log(checkOrder(500, 300)); // "Недостатньо коштів на рахунку"
 console.log(checkOrder(100, 300)); // "Операція зняття коштів проведена успішно"
 console.log(checkOrder(300, 0));