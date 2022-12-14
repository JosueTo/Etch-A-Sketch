const buttonBlack = document.querySelector('.btnBlack');
const buttonRandom = document.querySelector('.btnRandom');
const buttonGray = document.querySelector('.btnGray');
const buttonErase = document.querySelector('.btnErase');
const buttonClear = document.querySelector('.btnClear');
const board = document.querySelector('.container');
const buttonSize = document.querySelector('#size');
let color = 'black';
let click = false;

// Click to draw
board.addEventListener('click', function(e) {
  if (e.target.tagName != 'BUTTON') {
    click = !click;
    let draw = document.querySelector('#draw');
    if (click) {
      draw.textContent = 'Now you can draw';
    } else {
      draw.textContent = 'Click on the board to start drawing'
    }
  }
})

function createBoard(size) {
  let numDivs = size * size;

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.style.border = '1px lightgray solid';
    div.style.backgroundColor = 'white';
    div.addEventListener('mouseover', getColor);
    board.appendChild(div).classList.add('box');
  }

}

function getSize() {
  let input = prompt('What size your board would you like to be?');

  let message =  document.querySelector('#message');
  if (input === '') {
    message.textContent = 'Please provide a number';
    createBoard(16);
  } else if (input < 16 || input > 100) {
    message.textContent = 'Please provide a number between 16 and 100';
    createBoard(16);
  } else {
    message.textContent = 'Have fun!';
    return input; // return the number that user provides
  }
}

// Choose the color to print in the divs of the board
function getColor() {
  buttonBlack.addEventListener('click', () => {color = 'black'});
  buttonRandom.addEventListener('click', () => {color = 'random'});
  buttonGray.addEventListener('click', () => {color = 'gray'});
  buttonErase.addEventListener('click', () => {color = 'white'});

  if (click) {
    if (color === 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color === 'gray') {
      let randomNum = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${randomNum}, ${randomNum}, ${randomNum})`;
    } else if (color === 'white') {
      this.style.backgroundColor = 'white';
    } else {
      this.style.backgroundColor = 'black'
    }
  }
}

function clear() {
    let divs = document.querySelectorAll('.box');
    divs.forEach(div => div.style.backgroundColor = 'white');
}

buttonClear.addEventListener('click', clear);


buttonSize.addEventListener('click', () => {
  removeDivs(); // remove the divs previously created
  let size = getSize();
  createBoard(size);
})

function removeDivs() {
  const boxs = board.querySelectorAll('.box');
  boxs.forEach(box => box.remove()); 
}

createBoard(16);