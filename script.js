console.log('Hello, World!');

const gridContainerNode = document.querySelector('.grid-container');
const resizeBtn = document.getElementById('resize');
const resetBtn = document.getElementById('reset');

const squareSize = 16;
const squareNumberDefault = 40;

resizeBtn.addEventListener('click', (event) => {
  const userInput = prompt('Enter the number of squares per side, max is 100');

  if(userInput === null) {
    return;
  }

  if(isNaN(+userInput)) {
    alert('It should be a number');
    return;
  }

  if(+userInput > 100) {
    alert('A max of a number is 100');
    return;
  }

  while (gridContainerNode.firstChild) {
    gridContainerNode.lastChild.removeEventListener('mouseenter', makeNodeActive);
    gridContainerNode.removeChild(gridContainerNode.lastChild);
  }

  createGrid(+userInput);
});

resetBtn.addEventListener('click', (event) => {
  console.log('Reset');
  const squires = document.querySelectorAll('.node');

  squires.forEach(squire => squire.classList.remove('active'));
});

function makeNodeActive(event) {
  event.target.classList.add('active');
}

function createGrid(squaresNumber) {
  gridContainerNode.style.width = `${squaresNumber*squareSize}px`;

  for (let index = 0; index < squaresNumber*squaresNumber; index++) {
    const node = document.createElement('div');

    node.classList.add('node');
    node.addEventListener('mouseenter', makeNodeActive);

    gridContainerNode.appendChild(node);
  }
}

createGrid(squareNumberDefault);