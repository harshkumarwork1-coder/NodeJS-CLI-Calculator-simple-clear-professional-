A Command Line Interface (CLI) Calculator built using Node.js that demonstrates the concepts of Higher-Order Functions and Callback Functions.
This project takes dynamic user input from the terminal and performs basic arithmetic operations.

📌 Features

✔️ Addition

✔️ Subtraction

✔️ Multiplication

✔️ Division

✔️ Modulus

✔️ Higher-Order Function implementation

✔️ Callback Functions usage

✔️ User input handling using readline module

🚀 Technologies Used

JavaScript (Node.js)

Node.js readline module

Higher-Order Functions

Callback Functions

📂 Project Structure
NodeJS-CLI-Calculator/
│
├── calculator.js
└── README.md


⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/NodeJS-CLI-Calculator.git
2️⃣ Navigate into the project folder
cd NodeJS-CLI-Calculator
3️⃣ Run the program
node calculator.js



💻 How It Works

User enters the first number.

User enters the second number.

User selects the operation:

add

subtract

multiply

division

modulus

The program uses a higher-order function (calculate) to execute the selected operation using callback functions.

The result is displayed in the terminal.



🧠 Core Concept Demonstrated
🔹 Higher-Order Function
function calculate(a, b, operation){
    return operation(a, b);
}

A function that takes another function as a parameter.

🔹 Callback Functions
function add(x, y){
    return x + y;
}

Functions passed as arguments to another function.



🛑 Error Handling

Prevents invalid operations.

Handles division/modulus by zero.





📸 Example Output
Enter first number: 10
Enter second number: 5
choose operation (add, subtract, multiply, division, modulus): multiply
Result: 50
🎯 Learning Purpose

This project is ideal for beginners who want to understand:

How Node.js handles user input

What Higher-Order Functions are

How Callback Functions work

How to build CLI applications

🛠 Future Improvements

Add async/await version

Add switch-case implementation

Add input validation

Convert to a menu-based CLI

Add unit testing



👨‍💻 Author :- Harsh Kumar
