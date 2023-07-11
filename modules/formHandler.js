// Import necessary elements
import { titleInput, authorInput, booksList } from "./elements.js";
import Book from "./book.js";

// UI class to manage the book list
export class UI {

  // Constructor initializes book array and id counter
  constructor() {
    this.books = [];
    this.id = 0;
  }

  // Load books from local storage and create UI elements for each
  loadBooks() {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      this.books = storedBooks;
      this.books.forEach(book => this.createBook(book));
    }
  }

  // Create a new book UI element and add it to the book list
  createBook(book) {
    const newBook = document.createElement('tr');
    newBook.innerHTML = `
      <td>"${book.title}" by ${book.author}
      <button type="button" class="remove-btn" data-id="${book.id}">Remove</button>
      </td>
    `;
    booksList.appendChild(newBook);
  }

  // Clear input fields
  clearFields() {
    titleInput.value = '';
    authorInput.value = '';
  }

  // Remove a book from the books array and update the UI
  removeBook(id) {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      booksList.innerHTML = '';
      this.books.forEach(book => this.createBook(book));
      this.saveBooks();
    }
  }

  // Add a new book to the books array and update UI
  addBook(title, author) {
    if (title.trim() === '' || author.trim() === '') {
      alert('Please enter a title and author');
      return;
    }

    const book = new Book(title, author, this.id++);
    this.books.push(book);
    this.createBook(book);
    this.clearFields();
    this.saveBooks();
  }

  // Save the current books to the local storage 
  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
