// Get all the button elements from the DOM as a NodeList
const btns = document.querySelectorAll('button');

// Add a click event listener to each button in the NodeList
btns.forEach(button => {
    button.addEventListener('click',() => {
        // Add a outline style to the clicked button
        button.style.outline = '3px solid black';
        button.style.outlineOffset = '3px';
        button.style.transition = 'outline 0.1s ease-in-out';
    });
});

document.addEventListener('click', (event) => {
    // Check if the clicked element is a button or not
    if (!event.target.matches('button')) {
      // Remove the outline style from all buttons in the NodeList
      btns.forEach(button => {
        button.style.transition = 'outline 0s ease-in-out';
        button.style.outline = 'none';
      });
    }
  });
  
  
  
  


