container = document.querySelector('.container');

function createSketch () {
  for (i = 0; i < 16; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList = 'square';
    squareDiv.textContent = 'Hola mundo!';
    container.appendChild(squareDiv);
  }
}

createSketch();