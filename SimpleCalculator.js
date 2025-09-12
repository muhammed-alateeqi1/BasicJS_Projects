
let userInput = '';

function appendValue(value) {
    userInput += value;
    document.getElementById("clcScreen").innerHTML = userInput;
}
function calculate() {
    let expression = userInput;
    let tokens = expression.match(/\d+(\.\d+)?|\+|\-|\*|\//g);


    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "-" && (i === 0 || ["+", "-", "*", "/"].includes(tokens[i - 1]))) {
            tokens[i + 1] = (-Number(tokens[i + 1])).toString();
            tokens.splice(i, 1);
        }
    }

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "*" || tokens[i] === "/") {
            let left = Number(tokens[i - 1]);
            let right = Number(tokens[i + 1]);
            // division by zero handling
            if (tokens[i] === "/" && right === 0) {
                document.getElementById("clcScreen").innerHTML = "Error";
                userInput = "";
                return;
            }
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
            i = i--;
        }

    }


    document.getElementById("clcScreen").innerHTML = tokens[0];
    userInput = tokens[0].toString();
}

function clearScreen() {
    userInput = "";
    document.getElementById("clcScreen").innerHTML = "";
}

function backSpace() {
    userInput = userInput.slice(0, -1);
    document.getElementById("clcScreen").innerHTML = userInput;
};

