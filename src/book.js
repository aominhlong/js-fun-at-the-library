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


function saveReview(addReviews, reviews) {
  for (var i = 0; i <= reviews.length; i++) {
    if (addReviews !== reviews[i]) {
      return reviews.push(addReviews);
    } else {
      return reviews;
    }
  }
}

function calculatePageCount(bookPageCount, bookTitle) {
    return bookPageCount.length * 20;
};


function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
};


function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
