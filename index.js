const displayCnt = document.getElementById('count-el');
const saveEl = document.getElementById("save-el");
const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
let count = 0;

incrementBtn.addEventListener('click', () => {
    count = count + 1;
    displayCnt.textContent = count;
});

saveBtn.addEventListener('click', () => {
    let countStr = `${count} - `;
    saveEl.textContent += countStr;
    count = 0;
    displayCnt.textContent = 0;
});



