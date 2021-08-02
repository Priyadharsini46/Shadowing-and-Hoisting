//Shadowing:
//A variable is declared in a scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing
//Example:
function value() {
    let a = 2;
    let b=5
      
   console.log("Inner value " + a,b );
    }
    let a=10;
    let b=20;
      
    console.log("Outer value "+a,b); 
value();

//Output: Outer value 10 20
//        Inner value 2 5

// Var variable:
// We can shadowing var variable by let variable and const variable.
// Example:
//1) var with let:
function sample() {
    var a = 5;
        
    if (true) {
        let a = 10; // Legal Shadowing
         console.log("var with let : "+ a); // Output: var with let : 10
          }
}
sample();

//2) var with const:
function sample() {
    var a = 5;
        
    if (true) {
        const a = 10; 
         console.log("var with Const : "+ a); // Output: var with Const : 10
          }
}
sample();

//Let variable:
//We can't do showdowing for let variable by var variable, but we can do with let variable by const variable.
//1)let with var:

/*function sample() {
    let a = 5;
        
    if (true) {
        var a = 10; // Illegal Shadowing
         console.log(a); // Error: Identifier 'a' has already been declared
          }
}
sample();*/
//2) let with const:
function sample() {
    let a = 5;
        
    if (true) {
        const a = 10; 
         console.log('let with Const : '+ a); // Output: let with Const : 10
          }
}
sample();

//Const variable:
// we can shadowing const variable with let variable but we cant do const with var variable

//Const with Let:
function sample() {
    const a = 5;
        
    if (true) {
        let a = 10; 
         console.log("const with let: " + a); // Output: const with let: 10
          }
}
sample();

//const with var:
/*function sample() {
    const a = 5;
        
    if (true) {
        var a = 10;
         console.log(a); // Error: Identifier 'a' has already been declared
          }
}
sample();*/


//Hoisting:
//Hoisting makes the the compiler to allocate memory for variable and function declarations prior to execution of the code. 
//Declarations that are made using var are initialized with a default value of undefined.
//Declarations made using let and const are not initialized as part of hoisting.

//Example:
//1)Hoisting with var:

console.log(v);//Output: undefined
var v=10;
console.log(v); // Output: 10

//2) Hoisting with Let:
console.log(l); // ReferenceError: Cannot access 'l' before initialization
let l = 20;

   //Output:   ReferenceError: Cannot access 'l' before initialization

//3) Hoisting with const:
//A constant variable must be both declared and initialised before use.
/*const c;
console.log(c);

c=5;
console.log(c); */
//Output: Error: Missing initializer in const declaration

//Dead Zone (in Hoisting):
//If we try to access a value of variable before declaration, It will trows ReferenceError. 
//This will happen only with let and const variable to avoid Hoisting issues.
console.log(d); // ReferenceError: Cannot access 'd' before initialization
let d = 20;