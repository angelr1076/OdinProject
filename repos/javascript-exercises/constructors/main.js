function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, ${status}`);
  };
}

const newBook = new Book(
  'Down and Out in Paris and London',
  'George Orwell',
  276,
  'not read yet',
);

console.log(newBook.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
