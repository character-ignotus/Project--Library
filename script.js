let myLibrary = [];

function Book(title, author, pages, read) {
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = +document.querySelector('#pages').value;
    const read = Boolean(document.querySelector('#read').value);
    myLibrary.push(new Book(title, author, pages, read));
}

const modal =  document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const submitBook = document.querySelector('.submit-book');
const inputs = Array.from(document.querySelectorAll('input'));

submitBook.addEventListener('click', () => {
    addBookToLibrary();
    inputs.forEach(input => {
        input.value = '';
    });
    console.table(myLibrary);
});

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});