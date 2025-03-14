import bookService from "./services/book-service.js";

const queryParams = new URLSearchParams(window.location.search);
const idString = queryParams.get('id');
const id = parseInt(idString, 10);

console.log(id);

const service = new bookService();
console.log('pippo', service);
service.getBookFromId(id).then(book => renderBook(book));

function renderBook(bookData) {
    const  singleBookContainer = document.getElementById('single-book')
    singleBookContainer.innerHTML = '';
    const id = createTextElement("span", 'id: ' + bookData.id);
    const title = createTextElement("span", 'Titolo: ' + bookData.title);
    const authors = createTextElement("span", 'Autori: ' + bookData.authors);
    




    singleBookContainer.appendChild(id);
    singleBookContainer.appendChild(title);
    singleBookContainer.appendChild(authors);
    
}



function createTextElement(elementType, text) {

    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}