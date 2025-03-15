import bookService from "./services/book-service.js";

// Create an instance of the bookService class
const service = new bookService();

// Get the book ID from the URL query parameters
const queryParams = new URLSearchParams(window.location.search);
const bookId = queryParams.get('id');

// Fetch the book data using bookService
service.getBookData().then(booksData => {
    // Find the book by its ID
    const book = booksData.find(book => book.id == bookId);

    if (book) {
        // Extract the image URL from the formats object
        const imageUrl = book.coverImage;

        // Display the book image
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = book.title;
        document.getElementById('book-image-container').appendChild(imageElement);

        // Optionally, display other book details
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-authors').textContent = book.authors.map(author => author.name).join(', ');
        document.getElementById('book-summary').textContent = book.summary;
    } else {
        console.error('Book not found');
    }
}).catch(error => console.error('Error fetching book data:', error));

// const queryParams = new URLSearchParams(window.location.search);
// const idString = queryParams.get('id');
// const id = parseInt(idString, 10);

// const service = new bookService();
// service.getBookFromId(id).then(book => renderBook(book));

// function renderBook(bookData) {
//     const  singleBookContainer = document.getElementById('single-book')
//     singleBookContainer.innerHTML = '';

// 	const image = document.createElement('img');
// 	image.src = bookData.coverImage;
// 	const id = createTextElement("span", 'id: ' + bookData.id);
//     const title = createTextElement("span", 'Titolo: ' + bookData.title);
//     const authors = createTextElement("span", 'Autori: ' + bookData.authors);
// 	const summary = createTextElement("span", 'Sinossi: ' + bookData.summary)


//     singleBookContainer.appendChild(id);
//     singleBookContainer.appendChild(title);
//     singleBookContainer.appendChild(authors);
// 	singleBookContainer.appendChild(summary);

// }



// function createTextElement(elementType, text) {

//     const element = document.createElement(elementType);
//     const node = document.createTextNode(text);
//     element.appendChild(node);
//     return element;
// }