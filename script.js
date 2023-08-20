// The idea is to take the books from the user and save them in an array

const myLibrary = [];

// The Book Object Constructor
function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.readToString = function()
    {
        if(isRead) return "read"
        else return "not read"
    }
    
    this.info = function()
    {
        return `${title} by ${author}, has ${pages} pages and is ${this.readToString()}.`;
    }
}

//#region Console Testing

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, false);
addBookToLibrary(theHobbit);
addBookToLibrary(new Book("Pride and Prejudice", "Jane Austen", 279, false));
addBookToLibrary(new Book("The Tipping Point", "Malcom Gladwell", 301, true));
getLibrary();

//#endregion

// Adds a book object to the array of books
function addBookToLibrary(book)
{
    myLibrary[myLibrary.length] = book;
}

// Gets all the books from the array and displays them
function getLibrary()
{
    for(let j = 0; j < myLibrary.length; j++)
    {
        console.log(myLibrary[j].info());
    }
}

//#region GitHub Button

var gitButton = document.getElementById("git-button");
gitButton.addEventListener('click', function()
{
    window.open("https://github.com/KristijanTuric/odin-library", '_blank').focus();
});

//#endregion

//#region New Book Dialog Window

var newBookDialog = document.getElementById("newBookDialog");
var addButton = document.getElementById("add-button");
var confirmButton = newBookDialog.querySelector("#confirmBtn");
var dialogForm = newBookDialog.querySelector("form");
var selectRead = newBookDialog.querySelector("select");

addButton.addEventListener('click', () =>
{
    // Need to put showModal() here so that ::backdrop works
    newBookDialog.showModal();
});

selectRead.addEventListener('change', (e) => 
{
    confirmButton.value = selectRead.value;
});

newBookDialog.addEventListener('close', (e) =>
{
    console.log(confirmButton.value);
    dialogForm.reset();

});

confirmButton.addEventListener('click', (event) =>
{
    event.preventDefault();
    newBookDialog.close();
});

//#endregion