import bookService from "./services/book-service.js";

const service = new bookService();

service.getBookData()

// function getBooks() {
//     const booksPromise = service.getBookData();
//     booksPromise.then(booksData => render(booksData));
// }

// window.getBooks = getBooks;

// function render(data) {
//     const container = document.getElementById('books-container')
//     container.innerHTML = '';

//     for (let i = 0; i < booksData.length; i++) {
//         const element = booksData[i];

//         const bookContainer = document.createElement('div');
        
        
//     }
// }

//1) fate la fetch del file json e loggate l'array di libri ----- OK
//2) create la classe libro e la classe autore ----- OK
    //-libro: title(string), autors(array di autori), summary(stringa il primo dei summaries, subjects (array di stringhe)), coverImage(stringa-url)
    //-Author: name, yob, yod => calcola età
 //3) traducede il dato grezzo in oggetti
 //4) create una visualizzazione di schede libro con i dati disponibili
 //5) mettete un tasto che permetta di mettere in ordine i libri per titolo

