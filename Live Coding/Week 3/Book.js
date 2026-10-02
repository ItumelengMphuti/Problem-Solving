class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBook(title) {
    return this.books.find((b) => b.title === title);
  }

//   listBooks() {
//     this.books.forEach((b) => {
//       console.log(`${b.title} by ${b.author}`);
//     });
//   }
  listBooks() {
    return this.books.map((b) => {
      return `${b.title} by ${b.author}`;
    });
  }
}

// Example Usages
const lib = new Library();
lib.addBook(new Book("Clean Code", "Robert Martin"));
lib.addBook(new Book("The Pragmatic Programmer", "David Thomas"));

console.log(lib.findBook("Clean Code").author); // should print "Robert Martin"
console.log(lib.listBooks()); // should print each book
