function createTitle(title) {
  return (`The ${title}`);
}

function buildMainCharacter() {

};

function buildMainCharacter (name, age, pronouns) {
  return mainCharacter = {
  name: name,
  age: age,
  pronouns: pronouns,
  };
};

// *redo?
function saveReview(addReviews, reviews) {
  if (reviews.indexOf(addReviews) === -1) {
    return reviews.push(addReviews);
  } else (reviews.indexOf(addReviews) > -1)
    return reviews;
};


function calculatePageCount(bookPageCount, bookTitle) {
    return bookPageCount.length * 20;
};


function writeBook(bookTitle, bookCharacter, book) {
  return writeBook = {
    bookTitle: bookTitle,
    mainCharacter: bookCharacter,
    book: genre
  };
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
