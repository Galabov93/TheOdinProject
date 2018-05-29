let myLibrary = []
// bring up form button
const addBookButton = document.querySelector('.add-book');
const bookList = document.querySelector('.books');
const removeButton = document.querySelector('.remove-book-btn');

function Book(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
}

let book1 = new Book('My Book 1', 'YG', 1993, 9147);
let book2 = new Book('My Book 2', 'YG', 1993, 9147);
let book3 = new Book('My Book 3', 'YG', 1993, 9147);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


addBookButton.addEventListener('click', renderToTheScreen)
bookList.addEventListener('click', removeBookFromList)

function removeBookFromList(e) {
    e.preventDefault();
    if (Array.from(e.target.classList).includes('fas') || Array.from(e.target.classList).includes('remove-book-btn')) {
        const removeBookIndex = e.target.parentElement.dataset.index;
        myLibrary.splice(removeBookIndex, 1);
        renderToTheScreen();
    }

}

function renderToTheScreen() {
    bookList.innerHTML = '';
    let allBooks = '';

    myLibrary.forEach((book, i) => {
        let div = document.createElement('div')
        div.classList.add('book');
        div.setAttribute('data-index', i)

        div.innerHTML = `<div>${book.title}</div><div>${book.author}</div><div>${book.year}</div><div>${book.pages}<button data-index=${i} class="remove-book-btn"><i class="fas fa-minus"></i></button></div>`

        bookList.appendChild(div)

    })

    // bookList.innerHTML = allBooks;
}