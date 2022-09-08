const board = document.querySelector('.container');
const buttonSize = document.querySelector('#size');

function createBoard(size) {
    
  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.style.border = '1px black solid';
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.appendChild(div).classList.add('box');
  }

}

function getSize() {
  let input = prompt('What size your board would you like to be?');

  let message =  document.querySelector('#message');
  if (input === '' || input == isNaN) {
    message.textContent = 'Please provide a number';
  } else if (input < 16 || input > 100) {
    message.textContent = 'Please provide a number between 16 and 100';
  } else {
    message.textContent = 'Have fun!'
    return input;
  }
}


buttonSize.addEventListener('click', () => {
  removeDivs();
  let size = getSize();
  createBoard(size);
})

function removeDivs() {
  const boxs = board.querySelectorAll('.box');
  boxs.forEach(box => box.remove()); 
}

createBoard(16);