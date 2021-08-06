const DEFAULT_SIZE = 16;

window.onload = () => {
    createGrid(DEFAULT_SIZE);
};

/*****Grid creation*****/
function createGrid(size) {
    if (size>100 || size <= 0) {
        return alert("Pick a number between 1 and 100");
    };

    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.style.border = "solid 1.5px";
        gridElement.addEventListener('mouseover', changeColour);
        grid.appendChild(gridElement);
    };
};

/*****Remove grid*****/
function removeGrid(size) {
    if (size>100 || size <= 0) {
        return;
    };

    let grid = document.querySelector('.grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };
};

/*****Random colour picker*****/
function changeColour(e) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColour = '#';
    for (i = 0; i < 6; i++) {
        hexColour += hex[Math.floor(Math.random() * hex.length)];
    };
    e.target.style.backgroundColor = hexColour;
};

/*****Reset button*****/
const resetButton = document.querySelector('.reset');
const gridChildren = document.querySelector('.grid').childNodes;

resetButton.addEventListener('click', function () {
    gridChildren.forEach(function (item) {
        item.style.backgroundColor = 'white';
    });
    const gridSize = prompt("Choose a new grid size up to 100 squares");
    removeGrid(gridSize);
    createGrid(gridSize);
});





