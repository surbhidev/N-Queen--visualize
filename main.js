let currentSize = 0;

document.addEventListener('DOMContentLoaded', function() {
    const fourByFourBtn = document.getElementById('fourByFour');
    const eightByEightBtn = document.getElementById('eightByEight');
    const visualizeBtn = document.getElementById('visualizeBtn');
    const boardElement = document.getElementById('board');
    const initialMessage = document.getElementById('initialMessage');

    fourByFourBtn.addEventListener('click', () => setSize(4));
    eightByEightBtn.addEventListener('click', () => setSize(8));
    visualizeBtn.addEventListener('click', visualize);

    function setSize(size) {
        currentSize = size;
        createBoard(size);
        visualizeBtn.disabled = false;
        
        fourByFourBtn.classList.toggle('active', size === 4);
        eightByEightBtn.classList.toggle('active', size === 8);

        document.documentElement.style.setProperty('--board-size', `min(90vw, ${size * 70}px)`);
        document.documentElement.style.setProperty('--cell-size', `calc(var(--board-size) / ${size})`);

        boardElement.style.display = 'grid';
        initialMessage.style.display = 'none';

        document.querySelector('#Iterations ol').innerHTML = '';
        document.getElementById('alert').style.display = 'none';
    }
});