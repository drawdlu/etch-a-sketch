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
    }
}

createRow();