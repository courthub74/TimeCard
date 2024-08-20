// Query the Screen Mode Button
let screen_mode = document.getElementById('screen_mode');

// Query the Body
let whole_body = document.querySelector('body');

// add event listener to the screen mode button
screen_mode.addEventListener('click', () => {
    // change the class of the body
    whole_body.classList.toggle('nite_mode');
});