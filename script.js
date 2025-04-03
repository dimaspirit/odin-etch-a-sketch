console.log('Hello, World!');

const gridContainerNode = document.querySelector('.grid-container');
const rows = 4;
const columns = 4;

function createGrid() {
  const gridElementsCount = 16*16;

  for (let index = 0; index < gridElementsCount; index++) {
    const node = document.createElement('div');
    node.classList.add('node');
    gridContainerNode.appendChild(node);
  }
}

createGrid();