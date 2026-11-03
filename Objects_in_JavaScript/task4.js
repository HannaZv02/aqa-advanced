const person = {
  
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(person)
person.email = 'jd@nomail.com';

console.log(person)

delete person.age;
console.log(person)
