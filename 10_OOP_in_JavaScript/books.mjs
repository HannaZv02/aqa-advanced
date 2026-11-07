export class Book { 
 
    constructor(name, author, yearOfPublication) {
        this.name = name;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
        
}

printInfo() {
        console.log(`The book '${this.name}'is written by  ${this.author} and published in  ${this.yearOfPublication} year.`);

}
}



const book1 = new Book (785, "Miguel de Cervantes", "1605"); 
const book2 = new Book ("War and Peace", "Leo Tolstoy", "1869");
const book3 = new Book ("The Great Gatsby", "F. Scott Fitzgerald", "1925");


book1.printInfo()
book2.printInfo()
book3.printInfo()






