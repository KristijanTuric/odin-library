// The idea is to take the books from the user and save them in an array

var myLibrary = [];

// The Book Object Constructor
function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.readToString = function()
    {
        if(isRead) return "Read";
        else return "Not Read";
    }
    
    this.info = function()
    {
        return `${title} by ${author}, has ${pages} pages and is ${this.readToString()}.`;
    }
}
//#region Book Display
var mainContent = document.getElementById("content");

// Displays the given book in the UI
function bookToDisplay(book)
{
    const newDiv = document.createElement("div");
    newDiv.style.background = "gray";
    newDiv.style.borderRadius = "8px";
    newDiv.style.height = "280px";
    newDiv.style.padding = "10px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "column";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "space-between";

    const titleDiv = document.createElement("div");
    titleDiv.textContent = book.title;
    titleDiv.style.backgroundColor = "white";
    titleDiv.style.padding = "5px";
    titleDiv.style.borderRadius = "8px";

    const authorDiv = document.createElement("div");
    authorDiv.textContent = book.author;
    authorDiv.style.backgroundColor = "white";
    authorDiv.style.padding = "5px";
    authorDiv.style.borderRadius = "8px";

    const pagesDiv = document.createElement("div");
    pagesDiv.textContent = book.pages;
    pagesDiv.style.backgroundColor = "white";
    pagesDiv.style.padding = "5px";
    pagesDiv.style.borderRadius = "8px";

    const removeButton = document.createElement("button");
    removeButton.style.outline = "none";
    removeButton.style.border = "none";
    removeButton.style.fontSize = "large";
    removeButton.style.padding = "12px";
    removeButton.style.borderRadius = "8px";
    removeButton.style.width = "85%";
    removeButton.textContent = "Remove";

    removeButton.addEventListener('click', ()=> {

        removeBookFromLibrary(book);
        mainContent.removeChild(newDiv);

    });

    const readButton = document.createElement("button");
    readButton.textContent = book.readToString();
    if (book.readToString() == "Not Read") readButton.style.backgroundColor = "red";
    else readButton.style.backgroundColor = "lightgreen";
    readButton.style.outline = "none";
    readButton.style.border = "none";
    readButton.style.fontSize = "large";
    readButton.style.padding = "12px";
    readButton.style.borderRadius = "8px";
    readButton.style.width = "85%";

    readButton.addEventListener('click', () => {

        if(readButton.style.backgroundColor == "red")
        {
            readButton.style.backgroundColor = "lightgreen";
            readButton.textContent = "Read";
            Object.assign(book, new Book(book.title, book.author, book.pages, true));
            console.log(book.info());
        }
        else
        {
            readButton.style.backgroundColor = "red";
            readButton.textContent = "Not Read";
            Object.assign(book, new Book(book.title, book.author, book.pages, false));
            console.log(book.info());
        }
        

    });

    newDiv.appendChild(titleDiv);
    newDiv.appendChild(authorDiv);
    newDiv.appendChild(pagesDiv);
    newDiv.appendChild(removeButton);
    newDiv.appendChild(readButton);

    mainContent.appendChild(newDiv);
}

//#endregion Book Display

//#region Console Testing

console.log("Console testing ENABLED");
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, false);
addBookToLibrary(theHobbit);
addBookToLibrary(new Book("Pride and Prejudice", "Jane Austen", 279, false));

for(let i = 0; i < 20; i++) 
{
    addBookToLibrary(theHobbit);
}

// Runs only once when you start the appliaction, mostly for testing or when loading from local file
getLibrary();

//#endregion

//#region Helper Functions

// Adds a book object to the array of books and to the display
function addBookToLibrary(book)
{
    myLibrary[myLibrary.length] = book;
    bookToDisplay(book);
}

// Gets all the books from the array and displays them
function getLibrary()
{
    for(let j = 0; j < myLibrary.length; j++)
    {
        bookToDisplay(myLibrary[j]);
    }
}

// Removes the given book object from the library
function removeBookFromLibrary(book)
{
    myLibrary.splice(myLibrary.indexOf(book), 1);
}

//#endregion

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
var cancelButton = newBookDialog.querySelector("#cancelBtn");
var dialogForm = newBookDialog.querySelector("form");

// Form inputs

var titleInput = document.getElementById("titleInput");
var authorInput = document.getElementById("authorInput");
var pagesInput = document.getElementById("pagesInput");
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
    dialogForm.reset();
});

cancelButton.addEventListener('click', (event) => 
{
    titleInput.style.borderColor = "revert";
    authorInput.style.borderColor = "revert";
    pagesInput.style.borderColor = "revert";
    newBookDialog.close();
});

confirmButton.addEventListener('click', (event) =>
{
    event.preventDefault();

    if(titleInput.value == "" || authorInput.value == "" || pagesInput.value == "")
    {
        // Here we will want to make the inputs outline red
        // and maybe show a message that says the title is empty
        if(titleInput.value == "") 
        {
            titleInput.style.borderColor = "red";
        }
        else titleInput.style.borderColor = "limegreen";

        if(authorInput.value == "") authorInput.style.borderColor = "red";
        else authorInput.style.borderColor = "limegreen";

        if(pagesInput.value == "") pagesInput.style.borderColor = "red";
        else pagesInput.style.borderColor = "limegreen";
    }


    else 
    {
        addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, convertReadToBoolean(selectRead.value)));
        newBookDialog.close();
    }
    
});

/** This function converts the string given from the selector selectRead and return a bool value
 * 
 * @param {String} read String that is taken from the selector
 * @returns {Bool} True if the value is "Read" or False in case of any other selected value
 */
function convertReadToBoolean(read)
{
    if(read == "Read") return true;
    else return false;
}

//#endregion