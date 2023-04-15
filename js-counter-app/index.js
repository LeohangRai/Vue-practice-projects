let count = 0;

const countHeader = document.getElementById('count');
countHeader.innerHTML = count;

const addCountBtn = document.getElementById('add');
addCountBtn.addEventListener('click', (e) => {
    count++;
    countHeader.innerText = count;
})


const subtractCountBtn = document.getElementById('subtract')
subtractCountBtn.addEventListener('click', function(e) {
    count--;
    countHeader.innerHTML = count;
})