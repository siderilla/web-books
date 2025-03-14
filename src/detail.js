import bookService from "./services/book-service.js";

const queryParams = new URLSearchParams(window.location.search);
const idString = queryParams.get('id');
const id = parseInt(idString, 10);

console.log(id);

// const service = new bookService();
// service.getBookFromId(id).then(book => renderBook(book));

// function renderBook(book) {
//     console.log(book);
// }