// Declaration

const res = multiply(2,5)
console.log(res);

function  multiply (width, height){
   return width * height    
}

 
// Expression

const multiply1 = function (width, height) {
    const  res  = width * height ;
    return res;
}
console.log (multiply1(2,20))


//ARROW FUNCTION
const  multiply3 = (width, height) => width * height
console.log (multiply3(3, 4))