// Q 1. What is JavaScript?

//JavaScript is an scriptong language that allows to implement complex feautures on web page. it is an single threaded synchronous Language, it is an interpeter language that means our code is going to run line by line. this is one o9f the core technologies of the world wide web alongside HTML and CSS.


//Q2. what is the javascript run time environment?
// Ans:
// A runtime environment is where your program will be executed. JavaScript code may be executed in one of two runtime environments:
//  1.a browser’s runtime environment
//  2.the Node runtime environment
//  3.In each of these environments, different data values and functions are available, and these differences help distinguish front-end applications from back-end applications.
//Javascript runtime enivironment is responsible for making JavaScript asynchronous.

//Q3. what is execution context?
// Ans:
// There are two kinds of Execution Context in JavaScript:
// 1.Global Execution Context (GEC)
// 2.Function Execution Context (FEC)

// 1. Global Execution Context (GEC)
// Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.For every JavaScript file, there can only be one GEC.
// 2. Function Execution Context (FEC)
// Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function. 
// Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.


//Q4:what is javascript Engine?
//JavaScript is not understandable by computer but the only browser understands JavaScript. 
//So, we need a program to convert our JavaScript program into computer-understandable language. 
//Hence,A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language.

//Q5: flow of data in engine?
// EcmaScript specification tells how JavaScript should be implemented by the browser so that a JavaScript program runs exactly the same in all 
//the browsers, but it does not tell how JavaScript should run inside these browsers. It is up to the browser vendor to decide.
// Every browser provides a JavaScript engine that runs the JavaScript code. The Netscape browser used the SpiderMonkey JavaScript engine. 
//This engine was a rudimentary interpreter with no optimizations. Running the JavaScript code with this engine was slow but it worked.


