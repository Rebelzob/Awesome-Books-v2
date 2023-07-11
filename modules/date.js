// Import necessary elements
import { DateTime } from '../node_modules/luxon/src/luxon.js';

// Function to display the current date and time
export const dateTime = ()=> {
  // Get the current time in Dublin timezone
  const currentTime = DateTime.now().setZone('Europe/Dublin');

  // Format the time
  const formatedTime = currentTime.toFormat("MMMM d yyyy',' hh:mm:ss a");

  // Display the time in the 'set-time' element
  const elementTime = document.getElementById('set-time');
  elementTime.innerText = formatedTime;
}