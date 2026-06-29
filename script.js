function calculate(operator) {

    // Get the numbers from the input boxes
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let answer;

    // Perform the selected operation
    if (operator === "+") {
        answer = num1 + num2;
    } else if (operator === "-") {
        answer = num1 - num2;
    } else if (operator === "*") {
        answer = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            answer = "Cannot divide by zero";
        } else {
            answer = num1 / num2;
        }
    }

    // Display the result on the webpage
    document.getElementById("result").textContent = "Result: " + answer;

    // Print information to the console
    console.log("First Number:", num1);
    console.log("Second Number:", num2);
    console.log("Operator:", operator);
    console.log("Answer:", answer);
}