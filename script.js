let myLibrary = [];

function Book(title, author, pages, read) {
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = prompt('Title');
    const author = prompt('Author');
    const pages = +prompt('Pages');
    const read = Boolean(prompt('Read'));
    myLibrary.push(new Book(title, author, pages, read));
}