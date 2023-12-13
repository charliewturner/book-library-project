const myLibrary = [];

const author = document.getElementById("author");
const title = document.getElementById("title");
const pageCount = document.getElementById("pageCount");
const readStatus = document.getElementById("readStatus");

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
  console.log("button enabled");
}

const submit = document.getElementById("submit");



const testBook = new Book('charlie', 'ctbook', '999', 'yes');