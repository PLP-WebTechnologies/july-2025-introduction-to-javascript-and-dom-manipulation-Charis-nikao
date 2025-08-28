// =====================
// Part 1: Variables & Conditionals
// =====================

let age = 20;
let isStudent = true;

let variableOutput = document.getElementById("variable-output");

if (age >= 18 && isStudent) {
    variableOutput.textContent = "You are an adult student!";
} else if (age >= 18) {
    variableOutput.textContent = "You are an adult.";
} else {
    variableOutput.textContent = "You are a minor.";
}

// =====================
// Part 2: Custom Functions
// =====================

// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

let functionOutput = document.getElementById("function-output");
functionOutput.textContent = greetUser("Charis") + " The sum of 5 + 10 is " + addNumbers(5, 10);

// =====================
// Part 3: Loops
// =====================

// Loop 1: For loop
let loopOutput = document.getElementById("loop-output");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "For loop iteration " + i;
    loopOutput.appendChild(li);
}

// Loop 2: While loop
let j = 1;
while (j <= 3) {
    let li = document.createElement("li");
    li.textContent = "While loop iteration " + j;
    loopOutput.appendChild(li);
    j++;
}

// =====================
// Part 4: DOM Interactions
// =====================

let domButton = document.getElementById("dom-button");
let domText = document.getElementById("dom-text");

// Interaction 1: Change text on button click
domButton.addEventListener("click", function() {
    domText.textContent = "The button was clicked!";
    domText.style.color = "blue";  // Interaction 2: Change style
    document.body.style.backgroundColor = "#f0f8ff"; // Interaction 3: Change body background
});
