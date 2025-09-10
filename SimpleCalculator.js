
let userInput = '';

function appendValue(value) {
    userInput += value;
    document.getElementById("test").innerHTML = userInput;
    console.log(userInput);
}
function calculate() {
    let expression = userInput;
    let tokens = expression.match(/\d+(\.\d+)?|\+|\-|\*|\//g);
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "*" || tokens[i] === "/") {
            let left = Number(tokens[i - 1]);
            let right = Number(tokens[i + 1]);
            let result = tokens[i] === "*" ? left * right : left / right;
            tokens.splice(i - 1, 3, result);
        }
    }
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+" || tokens[i] === "-") {
            let left = Number(tokens[i - 1]);
            let right = Number(tokens[i + 1]);
            let result = tokens[i] === "+" ? left + right : left - right;

            tokens.splice(i - 1, 3, result);
            i--;
        }
        
    }
 document.getElementById("test").innerHTML = tokens[0];
        userInput = tokens[0].toString();
}
function clearScreen() {
    userInput = "";                
    document.getElementById("test").innerHTML = "";
}

