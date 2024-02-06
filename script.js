const myLibrary = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R Tolkien",
    pages: "432",
    read: "true"
  }
];

$submit = document.querySelector("#submit");

function Book(title, author, pageCount, readStatus) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}

const addBookToLibrary = () => {
  // do stuff here
  let title = document.querySelector("#titleInput").value;
  let author = document.querySelector("#authorInput").value;
  let pageCount = document.querySelector("#pageCountInput").value;
  let readStatus = checkReadStatus();
  let newBook = new Book(title, author, pageCount, readStatus);
  console.log(newBook);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function checkReadStatus() {
  if (document.querySelector("#readStatusInput").checked) {
    return true;
  } else {
    return false;
  }
}
$submit.addEventListener('click', () => {
  event.preventDefault();
  addBookToLibrary();
})



