let input = document.getElementById("inputTextID");
let output = document.getElementById("outputTextID");
let maiusculo = document.getElementById("maiusculo");
let minusculo = document.getElementById("minusculo");
let capitalizar = document.getElementById("capitalizar");
let upperLower = document.getElementById("upperLower");
let lowerUpper = document.getElementById("lowerUpper");
let clipboard = document.getElementById("clipboard");

// TEXT

function capitalize(text) {
    textArray = text.split(' ');
    textOutput = '';

    textArray.forEach(el => {
        first = el[0][0].toUpperCase();
        further = el.slice(1);
        textOutput += `${first}${further} `;
    })

    return textOutput;
}

function upperLowerCase(text) {
    textArray = text.toLowerCase().split(' ');
    textOutput = '';
    textArray.forEach(word => {
        for (letter in word) {
            if (letter % 2 == 0) {
                textOutput += word[letter].toUpperCase();
            } else {
                textOutput += word[letter].toLowerCase();
            }
        }
        textOutput += ' ';
    })

    return textOutput;
}

function lowerUpperCase(text){
    textArray = text.toLowerCase().split(' ');
    textOutput = '';
    textArray.forEach(word => {
        for (letter in word) {
            if (letter % 2 != 0) {
                textOutput += word[letter].toUpperCase();
            } else {
                textOutput += word[letter].toLowerCase();
            }
        }
        textOutput += ' ';
    })

    return textOutput;
}

function copyToClipBoard() {

    var copyText = output;

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    navigator.clipboard.writeText(copyText.value);
    clipboard.classList.add('btn-success')
}

function removeCssClass(element, ...params) {
    element.classList.remove(...params);
}

maiusculo.addEventListener('click',  () => {
    output.innerText = input.value.toUpperCase();
    removeCssClass(clipboard, 'btn-success');
})

minusculo.addEventListener('click',  () => {
    output.innerText = input.value.toLowerCase();
    removeCssClass(clipboard, 'btn-success');
})

capitalizar.addEventListener('click', () => {
    output.innerText = capitalize(input.value);
    removeCssClass(clipboard, 'btn-success');
})

upperLower.addEventListener('click', ()=> {
    output.innerText = upperLowerCase(input.value);
    removeCssClass(clipboard, 'btn-success');
})

lowerUpper.addEventListener('click', () => {
    output.innerText = lowerUpperCase(input.value);
    removeCssClass(clipboard, 'btn-success');
})

clipboard.addEventListener('click', () => copyToClipBoard(), false)

// NUMBER

let inputNumber = document.getElementById('inputNumberID');
let outputNumber = document.getElementById('outputNumberID');


function meterConversor(number) {
    switc
}

inputNumber.addEventListener('change', ()=> {
    outputNumber.value = inputNumber.value;
})

outputNumber.addEventListener('change', ()=> {
    inputNumber.value = outputNumber.value
})