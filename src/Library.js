function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
};

// function addBook(library, book) {
//   if (book.genre === 'fantasy') {
//     library.shelves.fantasy.push(book);
//   } else if (book.genre === 'fiction') {
//     library.shelves.fiction.push(book);
//   } else if (book.genre === 'nonFiction') {
//     library.shelves.nonFiction.push(book);
//   };
// };

function addBook(library, book) {
  library.shelves[book.genre].push(book);
};

// var genre = book.genre

// bracket notation is evaluated down to a string.
// library.shelves = object shelves
// library.shelves[book]



function checkoutBook(library, bookTitle, genre) {
  if (bookTitle === library.shelves[genre].title) {
    library.shelves[genre].splice(0, 1)
    return `You have now checked out ${bookTitle} from ${library}`
  }
  };


  // [genre] => accessing a genre

// if the customer wants this book, unshelf it (splice it)

// library.shelves.fiction === library.shelves[genre]

  // if (conditional) the book is not in this shelf, print the
  // string 'You have no check out ${bookTitle} from the denver public library'

// console.log(library) => library object
    // name: 'Denver Public Library',
    // shelves: {
    //   fantasy: [ [Object] ],
    //   fiction: [ [Object] ],
    //   nonFiction: [ [Object] ]
    // }


// assert.deepEqual

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
