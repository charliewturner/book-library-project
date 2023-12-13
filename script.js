const myLibrary = [];

$form = document.querySelector(".form");
$titleInput = form.querySelector("#titleInput");
$authorInput = form.querySelector("#authorInput");
$pageCountInput = form.querySelector("#pageCountInput");
$readStatusInput = form.querySelector("#readStatusInput");
$submit = form.querySelector("#submit");

function Book(author, title, pageCount, readStatus) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
    
}

function addBookToLibrary = () => {
  // do stuff here
  console.log("button enabled");

}

const submit = document.getElementById("submit");



const testBook = new Book('charlie', 'ctbook', '999', 'yes');