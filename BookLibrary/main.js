let myLibrary = []
// bring up form button
const addBookForm = document.querySelector('.add-book-form')
const bookList = document.querySelector('.books');
const removeButton = document.querySelector('.remove-book-btn');

// Form elements
const titleField = document.querySelector('input[name=title]');
const authorField = document.querySelector('input[name=author]');
const yearField = document.querySelector('input[name=year]');
const pagesField = document.querySelector('input[name=pages]');
const readCheckbox = document.querySelector('input[name=read]');

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    let book = new Book(titleField.value, 
                         authorField.value,
                         yearField.value,
                         pagesField.value,
                         readCheckbox.value);
    myLibrary.push(book);
    renderToTheScreen();
	addBookForm.reset();   
}


bookList.addEventListener('click', removeBookFromList)
addBookForm.addEventListener('submit', addBookToLibrary)


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

        div.innerHTML = `<div>${book.title}</div><div>${book.author}</div>
        <div>${book.year}</div><div>${book.pages}
        <button data-index=${i} class="remove-book-btn">
        <i class="fas fa-minus"></i></button></div>
        <input type="checkbox" ${book.read ? 'checked': ''}>        
        `
        
        bookList.appendChild(div)

    })
}