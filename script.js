const myLibrary = [];

function Book(author, title, pageCount, readStatus) {
  // the constructor...
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    
    this.shareDetails = function () {
        console.log(this.author, this.title, this.pageCount, this.readStatus);
    }
}

function addBookToLibrary() {
  // do stuff here
}

const testBook = new Book('charlie', 'ctbook', '999', 'yes');