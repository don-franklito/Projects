const resultPassword = document.querySelector('#genPass');
const lengthElement = document.querySelector('#length');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const numberElement = document.querySelector('#number');
const symbolElement = document.querySelector('#symbol');
const form = document.querySelector('#pass-form');
const clipEl = document.querySelector('.c-pass');

const fieldArray = [
    {
        field: capitalElement, 
        getChar: getCapitalLetter
    },
    {
        field: smallElement, 
        getChar: getSmallrLetter
    },
    {
        field: numberElement, 
        getChar: getNumber
    },
    {
        field: symbolElement, 
        getChar: getSpecialEle
    },
]

function getRandomChar (min, max) {
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min)
}

function getCapitalLetter () {
    return getRandomChar(65, 90);
}

function getSmallrLetter () {
    return getRandomChar(97, 122);
}

function getNumber () {
    return getRandomChar(48, 57);
}

function getSpecialEle () {
    const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const length = lengthElement.value;
    let generatedPass = '';
    const checkedFields = fieldArray.filter(({field}) => field.checked);

    for (i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * checkedFields.length);
        const letter = checkedFields[index].getChar();
        generatedPass += letter;
    }

    resultPassword.value = generatedPass;
});

clipEl.addEventListener('click', async (e) => {
    const text = resultPassword.value;
    if(text) {
        await navigator.clipboard.writeText(text);
        alert("Password copied to your clipboard");
    } else {
        alert("No password to copy");
    }
});