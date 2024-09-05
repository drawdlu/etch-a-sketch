const container = document.querySelector('.container');

function createRow() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        createBoxes(row);
    }
}

function createBoxes(rowDiv) {
    for (let i = 0; i < 16; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        rowDiv.appendChild(box)
        box.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'blue';
        })
    }
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
            newGridSize = prompt('You can only enter a grid size with range of 0-100');
        }
        
    } while (newGridSize < 0 || newGridSize > 100)
}


createRow();

listenToButton();