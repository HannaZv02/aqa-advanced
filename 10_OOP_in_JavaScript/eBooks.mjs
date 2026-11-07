 import {Book} from './books.mjs';

class EBook extends Book {
        constructor({name, author, yearOfPublication, format}) {
            super(name, author, yearOfPublication);
            this.format = format;
        }

        printInfo() {
        console.log(`The book '${this.name}'is written by  ${this.author} and published in  ${this.yearOfPublication} year.
                The format of the book is ${this.format}.`);
}


}


const eBook1 = new EBook  ({name: "Don Quixote", author: "Miguel de Cervantes",yearOfPublication: "1605", format: "PDF"});
console.log(eBook1)
eBook1.printInfo();





