import Author from './author.js';

export default class Book {
    constructor(id, title, authors = [] ,summary, subject = [], coverImage) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.summary = summary;
        this.subject = subject;
        this.coverImage = coverImage;
    }
}


// const author1 = new Author('pippo', 1950, 2000)
// const author2 = new Author('pluto', 1951, null)
// const authors = [author1, author2]
// const subject = ['giallo', 'epica']
// const book1 = new Book(26262, 'iliade', authors, 'ciao', subject, 'http://google.com/img1.jgp');
// console.log(book1);

