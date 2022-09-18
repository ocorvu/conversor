let input = document.getElementById("inputID");
let output = document.getElementById("outputID");
let maiusculo = document.getElementById("maiusculo");
let minusculo = document.getElementById("minusculo");
let capitalizar = document.getElementById("capitalizar");
let upperLower = document.getElementById("upperLower");
let lowerUpper = document.getElementById("lowerUpper");

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
upperLowerCase('Eu vou pegar o meu martelo');

maiusculo.addEventListener('click',  () => {
    output.innerText = input.value.toUpperCase();
})

minusculo.addEventListener('click',  () => {
    output.innerText = input.value.toLowerCase();
})

capitalizar.addEventListener('click', () => {
    output.innerText = capitalize(input.value);
})

upperLower.addEventListener('click', ()=> {
    output.innerText = upperLowerCase(input.value);
})

lowerUpper.addEventListener('click', () => {
    output.innerText = lowerUpperCase(input.value);
})

