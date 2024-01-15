
let secondDiv = document.getElementById('second-div');
let firstButton = document.getElementById('first-button');

function clickButton() {
    secondDiv.style.display = 'block';
}

firstButton.addEventListener('click', clickButton);

let firstDiv = document.getElementById('first-div');
let secondButton = document.getElementById('second-button');

function clickButton2() {
    secondDiv.style.display = 'none';
}

secondButton.addEventListener('click', clickButton2);

