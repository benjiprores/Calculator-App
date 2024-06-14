const display = document.getElementById('display');

function insert(number) {
    display.value += number;
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    display.value = eval(display.value);
}