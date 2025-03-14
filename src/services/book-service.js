import Book from "../model/book.js";
import Author from "../model/author.js";

export default class bookService {

    constructor() {}

    getBookData() {

        const DEV_BOOKS_URL = "/assets/books.json";
        const PROD_BOOKS_URL = "/web-books/assets/books.json";

        const booksDataPromise = fetch(DEV_BOOKS_URL)
        .then(resp => resp.json())
        .then(data => {
            const books = this.createBooksFromData(data);
            console.log(books);
            return books;
        })
        .catch(err => console.log(err));
        return booksDataPromise;
    }

    getBooksByTitle() {
        
    }

    getAuthorsName(authorsData) {
        const authorsList = [];
        for (let i = 0; i < authorsData.length; i++) {
            const authorData = authorsData[i];

            const authorName = authorData.name;
            const yob = authorData.birth_year;
            const yod = authorData.death_year;

            const newAuthor = new Author(authorName, yob, yod);
            authorsList.push(newAuthor);            
        }
        return authorsList;
    
    }

    // getBookFromId() {
    //     return this.getBookData()
    //     .then(books => {
    //         const book = ...
    //         return book;
    //     })
    // }

    createBooksFromData(data) {
        const books = [];
        for (let i = 0; i < data.length; i++) {
            const bookData = data[i];

            const id = bookData.id;
            const title = bookData.title;
            const authors = this.getAuthorsName(bookData.authors);
            const summaries = bookData.summaries[0];
            const subjects = bookData.subjects;
            const coverImg = bookData.formats["image/jpeg"];

            const newBook = new Book(id, title, authors, summaries, subjects, coverImg);
            books.push(newBook);
        }
        return books;
    }
}
