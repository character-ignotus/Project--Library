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
    const read = document.querySelector('#read').value;
    myLibrary.push(new Book(title, author, pages, read));
}

const body = document.querySelector('body');
const modal =  document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const submitBook = document.querySelector('.submit-book');
const inputs = Array.from(document.querySelectorAll('input'));
const bookCardsSection = document.createElement('div');
bookCardsSection.style.width = '800px';
bookCardsSection.style.height = '600px';
bookCardsSection.style.backgroundColor = 'grey';
body.appendChild(bookCardsSection);

submitBook.addEventListener('click', () => {
    addBookToLibrary();

    let cardDiv = document.createElement('div');
    cardDiv.setAttribute('data', `${myLibrary.length - 1}`);

        let para = document.createElement('p');
        para.textContent = myLibrary[myLibrary.length - 1].title;

        let author = document.createElement('p');
        author.textContent = myLibrary[myLibrary.length - 1].author;

        let pages = document.createElement('p');
        pages.textContent = myLibrary[myLibrary.length - 1].pages;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', (e) => {
        console.log(e.target.parentElement);

        let length = myLibrary.length;
        let currentCard = e.target.parentElement;
        let currentCardNum = e.target.parentElement.getAttribute('data');
        myLibrary.splice(currentCardNum, 1);

        for(let i = currentCardNum; i < length; i++) {
            let div = document.querySelector(`[data="${i}"]`);
            div.setAttribute('data', `${i - 1}`);
            console.log(div.getAttribute);
        }

        bookCardsSection.removeChild(currentCard);
    });

    cardDiv.appendChild(para);
    cardDiv.appendChild(author);
    cardDiv.appendChild(pages);
    cardDiv.appendChild(removeBtn);
    bookCardsSection.appendChild(cardDiv);

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

