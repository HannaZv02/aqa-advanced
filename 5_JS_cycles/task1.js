const averageGrade = 1;

if (averageGrade >= 101){
console.log ('Your grade', averageGrade, '"Немає такої оцінки"');
}else if (averageGrade >= 91 && averageGrade <= 100) {
   console.log  ('Your grade', averageGrade, '"Відмінно"');
} else if  (averageGrade >= 81 && averageGrade <= 90 ) {
    console.log  ('Your grade', averageGrade, '"Дуже добре"')
} else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log  ('Your grade', averageGrade, '"Добре"')
} else if ( averageGrade >= 60 && averageGrade <= 70 ){
    console.log  ('Your grade', averageGrade, '"Задовільно"')
} else {
 console.log ('Your grade', averageGrade, '"Незадовільно"')
}




