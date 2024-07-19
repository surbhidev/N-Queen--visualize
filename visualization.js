const ANIMATION_SPEED_MS = 200;

function visualize() {
    const size = currentSize;
    const animations = getNQueensAnimations(size);
    const board = document.getElementById('board');
    const iterationsList = document.querySelector('#Iterations ol');
    iterationsList.innerHTML = '';
    
    animations.forEach((animation, index) => {
        setTimeout(() => {
            const [row, col, isPlacing] = animation;
            const cell = board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            
            if (isPlacing) {
                cell.innerHTML = '<span class="queen">♕</span>';
                addIteration(`Placed queen at row ${row + 1}, column ${col + 1}`);
            } else {
                cell.innerHTML = '';
                addIteration(`Removed queen from row ${row + 1}, column ${col + 1}`);
            }
            
            if (index === animations.length - 1) {
                document.getElementById('alert').style.display = 'block';
                document.getElementById('alert').textContent = `Success! A valid solution for the ${size}-Queens problem has been found.`;
            }
        }, index * ANIMATION_SPEED_MS);
    });
}

function addIteration(text) {
    const iterationsList = document.querySelector('#Iterations ol');
    const li = document.createElement('li');
    li.textContent = text;
    iterationsList.appendChild(li);
}