class Author {
    constructor(name, yob, yod) {
        this.name = name;
        this.yob = yob;
        this.yod = yod;
    }

    getAge(){

    }
}

const author1 = new Author('pippo', 1950, 2000)
console.log(author1)
console.log(author1.getAge())//50
const author2 = new Author('pluto', 1951, null)
console.log(author2)
console.log(author1.getAge())//74
const author3 = new Author('paperino', null, null)
console.log(author2)
console.log(author1.getAge())//n/a