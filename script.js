let myLibrary = [];

function Book(title, author, pages, read) {
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readStatus = function() {
    if(this.read === 'Read') {
        this.read = 'Not read';
    } else {
        this.read = 'Read';
    }
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = +document.querySelector('#pages').value;
    const read = document.querySelector('#status').value;
    myLibrary.push(new Book(title, author, pages, read));
}

const body = document.querySelector('body');
const modal =  document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const submitBook = document.querySelector('.submit-book');
const cardsSection = document.querySelector('.cards-section')
const inputs = Array.from(document.querySelectorAll('input'));

function createBookCard() {
    let cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card')
    cardDiv.setAttribute('data', `${myLibrary.length - 1}`);

    let cardBgcImg = document.createElement('div');
    cardBgcImg.setAttribute('class', 'bgc-image');
    cardDiv.appendChild(cardBgcImg);

    let cardInfo = document.createElement('div');
    cardInfo.setAttribute('class', 'card-info');
    cardDiv.appendChild(cardInfo);

    let cardBtns = document.createElement('div');
    cardBtns.setAttribute('class', 'card-btns');
    cardDiv.appendChild(cardBtns);

        let bookTitle = document.createElement('div');
        bookTitle.setAttribute('class', 'book');
        cardInfo.appendChild(bookTitle);
        let para = document.createElement('p');
        para.textContent = myLibrary[myLibrary.length - 1].title;
        bookTitle.appendChild(para);

        let bookAuthor = document.createElement('div');
        bookAuthor.setAttribute('class', 'book');
        cardInfo.appendChild(bookAuthor);
        let author = document.createElement('p');
        author.textContent = myLibrary[myLibrary.length - 1].author;
        bookAuthor.appendChild(author);

        let bookPages = document.createElement('div');
        bookPages.setAttribute('class', 'book');
        cardInfo.appendChild(bookPages);
        let pages = document.createElement('p');
        pages.textContent = myLibrary[myLibrary.length - 1].pages;
        bookPages.appendChild(pages);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', (e) => {
        console.log(e.target.parentElement.parentElement);

        let length = myLibrary.length;
        let currentCard = e.target.parentElement.parentElement;
        let currentCardNum = e.target.parentElement.parentElement.getAttribute('data');
        myLibrary.splice(currentCardNum, 1);

        for(let i = currentCardNum; i < length; i++) {
            let div = document.querySelector(`[data="${i}"]`);
            div.setAttribute('data', `${i - 1}`);
            console.log(div.getAttribute);
        }

        cardsSection.removeChild(currentCard);
    });

    const readStatus = document.createElement('button');
    readStatus.textContent = `${myLibrary[myLibrary.length - 1].read}`;

    readStatus.addEventListener('click', (e) => {
        let currentCardNum = e.target.parentElement.parentElement.getAttribute('data');
        myLibrary[currentCardNum].readStatus();
        readStatus.textContent = `${myLibrary[currentCardNum].read}`;
    });

    cardBtns.appendChild(removeBtn);
    cardBtns.appendChild(readStatus);
    cardsSection.appendChild(cardDiv);
}

submitBook.addEventListener('click', () => {
    addBookToLibrary();
    createBookCard();
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

