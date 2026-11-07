
function  checkAge (age) {
 if (age >= 18) {
   console.log("Особа повнолітня");
     return true;

  } else {
    console.log("Особа  не повнолітня");
      return false; 
}
}

 console.log(checkAge(21)); 
 console.log(checkAge(15)); 
 console.log(checkAge(10)); 