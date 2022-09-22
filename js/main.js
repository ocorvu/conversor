// TEXT

// variables
let input = document.getElementById("inputTextID");
let output = document.getElementById("outputTextID");
let maiusculo = document.getElementById("maiusculo");
let minusculo = document.getElementById("minusculo");
let capitalizar = document.getElementById("capitalizar");
let upperLower = document.getElementById("upperLower");
let lowerUpper = document.getElementById("lowerUpper");
let clipboard = document.getElementById("clipboard");
let inverse = document.getElementById("inverse");
let reverse = document.getElementById("reverse");

// functions
function capitalize(text) {
    let textArray = text.split(' ');
    let textOutput = '';

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

function inverseText(text) {
    textOutput = ''
    textArray = text.split(' ')
    textArray.forEach(word => {
        wordArray = word.split('')
        wordArray.reverse();
        wordArray.forEach(letter => {
            textOutput += letter;
        })
        textOutput += ' '
    })
    
    return textOutput;
}

function reverseText(text) {
    let textOutput = '';
    textArray = inverseText(text).split(' ');
    textArray.reverse()
    textArray.forEach(word =>{
        textOutput += ` ${word}`
    })
    
    return textOutput.trim();

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

//events
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

inverse.addEventListener('click', ()=> {
    output.innerText = inverseText(input.value);
})

reverse.addEventListener('click', ()=> {
    output.innerText = reverseText(input.value)
})

clipboard.addEventListener('click', () => copyToClipBoard(), false)

// NUMBER

// variables
let inputNumber = document.getElementById('inputNumberID');
let outputNumber = document.getElementById('outputNumberID');
let inputUnit = document.getElementById('inputMeterID');
let outputUnit = document.getElementById('outputMeterID');

//functions
function meterConversor(firstUnit, secondUnit, number) {
    res = (firstUnit / secondUnit) * number
    return res
}

//events
inputNumber.addEventListener('change', ()=> {
    outputNumber.value = meterConversor(inputUnit.value, outputUnit.value, inputNumber.value);
})

outputNumber.addEventListener('change', ()=> {
    inputNumber.value = meterConversor(outputUnit.value, inputUnit.value, outputNumber.value);
})
