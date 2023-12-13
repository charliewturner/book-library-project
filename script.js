const myLibrary = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R Tolkien",
    pages: "432",
    read: "true"
  }
];

$form = document.querySelector("#form");
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

const addBookToLibrary = () => {
  // do stuff here
  console.log("button enabled");
  let title = $titleInput.value;
  let author = $authorInput.value;
  let pageCount = $pageCountInput.value;
  let readStatus = $readStatusInput.value;
  let newBook = new Book(author, title, pageCount, readStatus);
  myLibrary.push(newBook);
}

$submit.addEventListener('click', () => {
  addBookToLibrary();

})

function displayLibrary() {
  myLibrary.forEach(element => {
    console.log(element);
  });
}


