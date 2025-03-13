// import Book from "../model/book.js";
// import Author from "../model/book.js";


export default class bookService {

    constructor() {}

    getBookData() {

        const devUrl = "/assets/books.json";
        const prodUrl = "/web-books/assets/books.json";

        const booksPromise = fetch(devUrl)
        .then(resp => resp.json())
        .then(jsonData => {
            // const books = this.createBooksFromData(jsonData);
            console.log(jsonData);
        })
        .catch(error => console.log(error));
        return booksPromise;
    }

    getBooksByTitle() {
        
    }

    getAuthorsName() {

    }

    getFirstSummary() {
        
    }

    getSubjects() {

    }

    getCoverImage() {

    }

    // createBooksFromData(data) {
    //     const books = [];
    //     for (let i = 0; i < data.length; i++) {
    //         const element = data[i];
    //         // creo l'istanza per ciascun libro
    //         const newBook = new Book(element.title, element.author, element.subject, element.summary, element.coverImage)
    //         books.push(newBook);
    //     }
    //     return books;
    // }

    calculateAuthorsAge(yob, yod) {

    }
}