const container = document.querySelector('.container');
const INITIAL_SIZE = 16;
let previousGridSize = INITIAL_SIZE;

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        createBoxes(row, size);
    }
}

function createBoxes(rowDiv, size) {
    for (let i = 0; i < size; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        rowDiv.appendChild(box)
        box.addEventListener('mouseover', changeBackgroundColor)
    }
}

function changeBackgroundColor(event) {
    let boxColor = event.target.style.backgroundColor;
    if (boxColor === '') {
        const hue = getRandomHue();
        event.target.style.backgroundColor = `hsl(${hue}, 100%, 50%, 0)`;
    } else {
        event.target.style.backgroundColor = addOpacity(boxColor);
    }
}

function addOpacity(color) {
    const getOpacity = /(\d\.?\d?)\)/;
    const opacity = getOpacity.exec(color)[1];

    if (color.slice(0, 4) === 'rgb(') {
        return;
    }

    const newOpacity = (+opacity + 0.1).toFixed(1);
    const newColor = color.replace(getOpacity, `${newOpacity})`);

    return newColor;
}

function getRandomHue() {
    const min = Math.ceil(0);
    const max = Math.floor(360);
    const hue = (Math.random() * (max - min + 1)) + min; 
    return Math.round(hue);
}


function listenToButton() {
    const button = document.querySelector('button')
    button.addEventListener('click', promptForNewSize);
}

function promptForNewSize() {
    let newGridSize;
    let firstPrompt = true;

    do {
        if (firstPrompt) {
            newGridSize = prompt('Enter a grid size');
            firstPrompt = false;
        } else {
            newGridSize = prompt('You can only enter a grid size with range of 1-100');
        }
        
    } while (newGridSize <= 0 || newGridSize > 100)

    if (previousGridSize === newGridSize) {
        return;
    }

    previousGridSize = newGridSize;
    removeOldGrid();
    createGrid(newGridSize);
}

function removeOldGrid() {
    const children = Array.from(container.children);
    children.forEach( (child) => {
        child.remove();
    })
}

createGrid(INITIAL_SIZE);

listenToButton();