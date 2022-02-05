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
  return arrayTitles.join(', ');
};


// sciFiShelf = array hyperion and dune objects
// title = Hyperion
// need .includes() ???

function searchShelf(sciFiShelf, title) {
  console.log(';lkasdjf;asjdf;jsal;df', sciFiShelf[i].title);
  for (var i = 0; i < sciFiShelf.length; i++) {
  }
};

// access the array -> object -> titles
// includes() access


module.exports = {
   shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
