container = document.querySelector('.container');

function createRow() {
  for (i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList = 'square-div';
    container.appendChild(squareDiv);
  }
}

createRow();

