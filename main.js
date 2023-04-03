// // // DARK MODE AND LIGHT MODE
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

// Get the stored value for 'darkMode' from localStorage
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set the initial color scheme based on the stored value
if (isDarkMode) {
    toggle.classList.add('bi-moon');
    body.style.background = '#202023';
    body.style.color = 'white';
} else {
    toggle.classList.remove('bi-moon');
    body.style.background = 'white';
    body.style.color = 'black';
}

// Listen for a click event on the toggle button
toggle.addEventListener('click', function(){
    isDarkMode = !isDarkMode; // Toggle the value of 'isDarkMode'
    localStorage.setItem('darkMode', isDarkMode); // Store the updated value
    toggle.classList.toggle('bi-moon');

    // Set the background and text color based on the updated value
    if (isDarkMode) {
        body.style.background = '#202023';
        body.style.color = 'white';
        body.style.transition = '1s';
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
    }
});









