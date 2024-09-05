const container = document.querySelector('.container');
let previousGridSize = 16;

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
        console.log(box.getAttribute('background-color'));
    }
}

function changeBackgroundColor(event) {
    let boxColor = event.target.style.backgroundColor;
    if (boxColor === '') {
        const hue = getRandomHue();
        event.target.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    }
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
    
    removeOldGrid();
    createGrid(newGridSize);
}

function removeOldGrid() {
    const children = Array.from(container.children);
    children.forEach( (child) => {
        child.remove();
    })
}

createGrid(16);

listenToButton();