const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Function to move the "No" button to a random position
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

// Ensure "No" button doesn't overlap the "Yes" button initially
function setInitialPosition() {
  const yesButtonRect = yesButton.getBoundingClientRect();
  let noX, noY;

  do {
    noX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    noY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  } while (
    noX + noButton.offsetWidth > yesButtonRect.left &&
    noX < yesButtonRect.right &&
    noY + noButton.offsetHeight > yesButtonRect.top &&
    noY < yesButtonRect.bottom
  );

  noButton.style.left = `${noX}px`;
  noButton.style.top = `${noY}px`;
}

// Call the function to set the initial position
setInitialPosition();

// Add hover and click listeners for the "No" button
noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

// Show alert when the "Yes" button is clicked
yesButton.addEventListener('click', () => {
  alert("But i dont 😂 ");
});
