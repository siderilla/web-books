import bookService from "./services/book-service.js";

const service = new bookService();


function getBooks() {
    const booksPromise = service.getBookData();
    booksPromise.then(booksData => render(booksData));
}

window.getBooks = getBooks;

function render(booksData) {
    const container = document.getElementById('books-container')
    container.innerHTML = '';

    for (let i = 0; i < booksData.length; i++) {
        const book = booksData[i];
        const image = document.createElement('img');
        image.src = book.coverImage;
        // document.getElementById().style.backgroundImage = "interpolata per l'url"
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-card');

        const titleContainer = createTextElement("h5", 'Titolo: ' + book.title);        
        
        bookContainer.appendChild(image);
        bookContainer.appendChild(titleContainer);
        container.appendChild(bookContainer);
        
    }
}

function createTextElement(elementType, text) {

    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;

}

//1) fate la fetch del file json e loggate l'array di libri ----- OK
//2) create la classe libro e la classe autore ----- OK
    //-libro: title(string), autors(array di autori), summary(stringa il primo dei summaries, subjects (array di stringhe)), coverImage(stringa-url)
    //-Author: name, yob, yod => calcola età
 //3) traducede il dato grezzo in oggetti
 //4) create una visualizzazione di schede libro con i dati disponibili
 //5) mettete un tasto che permetta di mettere in ordine i libri per titolo

