// script.js
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Function to move the "No" button to a random position
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

// Add hover and click listeners for the "No" button
noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

// Show alert when the "Yes" button is clicked
yesButton.addEventListener('click', () => {
  alert("Aww, that's so sweet! I love you more! ❤️");
});
