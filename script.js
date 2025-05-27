
const display = document.getElementById('display');

function press(key) {
    if (key === 'C') {
        display.value = '';
    } else if (key === '⌫') {
display.value = display.value.slice(0, -1);                 
    } else if (key === '=') {
        try{
            display.value = eval(display.value);
         } catch {
            display.value = 'Error';
         }
        }else 
        { display.value += key;
}
}

function solve() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert ('Error');

    }
}