// Import necessary elements and modules
import { UI } from './modules/formHandler.js';
import { spaFeature } from './modules/spaFeature.js';
import { dateTime } from './modules/date.js';
import { titleInput, authorInput, form, booksList } from './modules/elements.js';

// Initialize a new UI instance
let ui = new UI();

// Event listener for form submission 
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get input values
  const title = titleInput.value;
  const author = authorInput.value;

  // Add the new book
  ui.addBook(title, author);
});

// Event listener for page load - bind ui to maintain context
document.addEventListener('DOMContentLoaded', ui.loadBooks.bind(ui));

// Event listener for book removal
booksList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-btn')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    ui.removeBook(id);
  }
});

// SPA feature
spaFeature();

// Datetime feature
dateTime();
