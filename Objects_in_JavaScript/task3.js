 const car1 ={
    brand: "Toyota",
    model: "Camry",
    year: 2020,

 };

 const car2 ={
    brand1: "Honda",
    model2: "Civic",
    year3: 2019,
 };


 const car3 = {...car1, ...car2};
 console.log(car3); // Output: { brand: 'Honda', model: 'Civic', year: 2019 }
