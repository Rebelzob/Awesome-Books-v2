// Import necessary elements
import { btnList, btnAdd, btnContact, bookList, addBook_, contact } from "./elements.js";

// Function to handle SPA feature
export const spaFeature = () => {

  // Event listener for 'List' button
  // Displays the book list and changes button color
  btnList.addEventListener('click',function(){
    bookList.classList.add('display')
    addBook_.classList.remove('display')
    contact.classList.remove('display')
    btnList.style.color='blue'
    btnAdd.style.color='black'
    btnContact.style.color='black'
  })

  // Event listener for 'Add' button
  // Displays the add book form and changes button color
  btnAdd.addEventListener('click',function(){
    bookList.classList.remove('display')
    addBook_.classList.add('display')
    contact.classList.remove('display')
    btnList.style.color='black'
    btnAdd.style.color='blue'
    btnContact.style.color='black'
  })

  // Event listener for 'Contact' button
  // Displays the contact form and changes button color
  btnContact.addEventListener('click',function(){
    bookList.classList.remove('display')
    addBook_.classList.remove('display')
    contact.classList.add('display')
    btnList.style.color='black'
    btnAdd.style.color='black'
    btnContact.style.color='blue'
  })
}