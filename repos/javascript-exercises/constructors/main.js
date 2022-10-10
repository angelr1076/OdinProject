function Hobbit(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, ${status}`);
  };
}

const newHobbit = new Hobbit(
  'Down and Out in Paris and London',
  'George Orwell',
  276,
  'not read yet',
);

console.log(newHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
