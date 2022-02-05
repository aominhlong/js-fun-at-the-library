function shelfBook(nameBook, sciFiShelf) {
  if (sciFiShelf.length <= 2) {
  sciFiShelf.unshift(nameBook);
  }
};



function unshelfBook(bookName, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === bookName) {
 sciFiShelf.splice(i, 1);
    }
  }
};


 var arrayTitles = [];
function listTitles(titles) {
  for (var i = 0; i < titles.length; i++) {
    arrayTitles.push(titles[i].title)
  }
  return arrayTitles.join(", ");
};


// sciFiShelf = array hyperion and dune objects
// title = Hyperion
// need .includes() ???
// sciFiShelf[i].title = hyperion, dune strings

function searchShelf(sciFiShelf, titleBook) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === titleBook) {
      return true
    }
  }
      return false
};

// access the array -> object -> titles yes
// includes() access

// sciFiShelf.includes(titles) returns false

module.exports = {
   shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
