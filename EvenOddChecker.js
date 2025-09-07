let userInteger;
function evenOddChecker() {
    let inputValue = document.querySelector('#evenOddInput').value.trim();
    let evenOddOutput = document.querySelector('.evenOdd p');

    if (inputValue === '') {
        evenOddOutput.innerHTML = 'fill the field';
        return;
    }
    userInteger = Number(inputValue);

    if (isNaN(userInteger)) {
        evenOddOutput.innerHTML = 'Please Enter A Number';
    } else if (userInteger % 2 === 0) {
        evenOddOutput.innerHTML = 'Is Even';
        console.log(userInteger);

    } else {
        evenOddOutput.innerHTML = 'Is Odd';
    }
}

