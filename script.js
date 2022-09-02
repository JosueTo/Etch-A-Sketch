const container = document.querySelector('.container');

// Create the grid divs
function createDivs(size) {
  container.style.setProperty('--size', size)
  for (i = 0; i < size * size; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList = 'square-div';
    container.appendChild(squareDiv);
  }
}

createDivs(100);

