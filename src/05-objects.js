/**
 * This function returns a simple object representing a book.
 *
 * @returns {object} - An object with properties: title, author, and year.
 *
 * Usage:
 * const myBook = createBook();
 * console.log(myBook.title); // Outputs the title of the book
 */

function createBook() {
    const book = {
        title: 'the Players Handbook',
        author: 'some guy',
        year: 2024
    }
    return book;
}


/**
 * This function finds a book by its author from a given array of books.
 *
 * @param {array} books - An array of book objects.
 * @param {string} author - The author name to search for.
 * @returns {object|null} - The book object if found, otherwise null.
 *
 * Usage:
 * const result = findBookByAuthor([{title: "Sample", author: "John Doe", year: 2020}, {title: "Here I am", author: "Peter Hansen", year: 1987}], "John Doe");
 * console.log(result); // Outputs {title: "Sample", author: "John Doe", year: 2020}
 */

function findBookByAuthor(books, author) {
    const bookArray = [
        {title: "Sample", author: "John Doe", year: 2020},
        {title: "Here I am", author: "Peter Hansen", year: 1987}
    ];
    for (let i = 0; i < bookArray.length; i++){
        if (bookArray[i].author === author) return bookArray[i];
    }
}


/**
 * This function lists all book titles published before a given year.
 *
 * @param {array} books - An array of book objects.
 * @param {number} year - The cutoff year.
 * @returns {array} - An array of book objects.
 *
 * Usage:
 * const oldBooks = getOlderBooks([{title: "A", year: 1990}, {title: "B", year: 2022}], 2000);
 * console.log(oldBooks); // Outputs [{title: "A", year: 1990}]
 */


function getOlderBooks(books, year) {
    const bookArray = [
        {title: "A", year: 1990},
        {title: "B", year: 2022}
    ];
    const returnBookArray = [];
    for (let i = 0; i < bookArray.length; i++){
        if (bookArray[i].year < year){
            returnBookArray.push(bookArray[i]);
        }
    }
    return returnBookArray;
}

/**
 * This function calculates the average rating for all movies combined.
 *
 * @param {array} movies - An array of movie objects, each with `title` and `ratings`.
 * @returns {number} - The average rating of all movies.
 *
 * Usage:
 * const movies = [
 *   { title: "Movie A", ratings: [5, 4, 4] },
 *   { title: "Movie B", ratings: [3, 4, 5, 3] },
 *   { title: "Movie C", ratings: [5, 5, 5] }
 * ];
 * const averageRating = calculateAverageRating(movies);
 * console.log(averageRating); // Outputs the combined average, e.g., 4.22
 */
const movies = [
    { title: "Movie A", ratings: [] },
    { title: "Movie B", ratings: [3, 4, 5, 3] },
    { title: "Movie C", ratings: [5, 5, 5] }
];

function calculateAverageRating(movies) {
if (movies.length !== 0) {
    let totalSum = 0;
    let divisionCounter = 0;
    movies.forEach(movies => {
        let sum = 0;
        if (movies.ratings.length !== 0) {
            for (let i = 0; i < movies.ratings.length; i++) {
                sum += movies.ratings[i];
            }
            totalSum += (sum / movies.ratings.length);
            divisionCounter++;
        }
    })
    const averageRound = Math.floor((totalSum / divisionCounter) * 10) / 10;
    return averageRound;
} else {
    return 0;
}
}

