const myLibrary = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R Tolkien",
    pageCount: "432",
    readStatus: "true"
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
  displayLibrary();
})

function displayLibrary() {

  let libraryElement = document.querySelector("#library");
  libraryElement.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `
    <div class = "book-card">
      <h3 class = "title">${book.title}</h3><br /><br />
      <h5 class = "author">${book.author}</h5><br /><br />
      <h5 class = "page-count">${book.pageCount}</h5><br /><br />
      <h5 class = "read-status">${book.readStatus}</h5><br /><br />
    </div> `;
    libraryElement.appendChild(bookElement);
  }
}

displayLibrary()