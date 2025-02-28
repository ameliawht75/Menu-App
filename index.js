//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//Menu Books

//class Books
    //title
    //author
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author; 
    }
}

//class Menu
class Menu {
    constructor() {
        this.books = []; //Array to store book objects.
    }



//add a new book
addBook(){
    let bookTitle = prompt("Enter book title:");
    let bookAuthor =prompt("Enter book author:");

    if(bookTitle && bookAuthor) { //Make sure inputs are not empty
        this.books.push(new Book(bookTitle, bookAuthor));
        alert("Book added: ${bookTitle} by ${bookAuthor}"); //Make sure it says who the book is writtn by.
    } else {
        alert("Invalid input. Book not added.");
    }
}


//delete book using index
deleteBook(){
    let bookIndex = prompt("Enter book index to DELETE:");
    this.books.splice(bookIndex, 1);
}
//view books
viewBooks() {
    if (this.books.length === 0) {
        alert("No books in library.");
        return;
    }

    let displayBooks = ""; // Initialize empty string
    for (let i = 0; i < this.books.length; i++) {
        displayBooks += `${i}) ${this.books[i].title} by ${this.books[i].author}\n`;
    }

    alert(`Book Library:\n\n${displayBooks}`);
}
//see a menu
showMainMenu() {
    return prompt(`
    Main Menu:
    ------------------------------------
    0) Exit Menu
    1) Add Book
    2) Delete Books
    3) View All Books
    `);
}
//start the memu
    start(){
        let selection = this.showMainMenu();

        while(selection != 0){

            switch(selection) {
            
                case "1": this.addBook();
                break;

                case "2": this.deleteBook();
                break;

                case "3": this.viewBooks();
                break;

                default: selection = 0;
            }
        selection = this.showMainMenu();
        }
        alert("Exiting Menu...goodbye!");
    }
}

//instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();
