// Import stylesheets
import './style.css';
import GetTime from './modules/tsfunctions/return_type.ts';
import printHello from './modules/tsfunctions/Void_Return_Type.ts';
import multiply from './modules/tsfunctions/Parameters.ts';
import add from './modules/tsfunctions/Optional_Parameters.ts';
import pow from './modules/tsfunctions/Default_Parameters.ts';
// import divide from './modules/tsfunctions/Named_Parameters.ts';
import addrest from './modules/tsfunctions/Rest_Parameters.ts';
import negateFunction from './modules/tsfunctions/Type_Alias.ts';

// Script.js

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const car: { type: string; model: string; year: number } = {
  type: 'Toyota',
  model: 'Corolla',
  year: 2009,
};

console.log(car);

// function GetTime(): number {
//   return new Date().getTime();
// }

// console.log(GetTime());

GetTime();

printHello();
multiply();
add();
pow();
addrest();
negateFunction();

// function multiply(a: number, b: number) {
//   return a * b;
// }

// console.log(multiply(2, 5));

// function add(a: number, b: number, c?: number) {
//   return a + b + (c || 0);
// }

// console.log(add(2, 5));

// function pow(value: number, exponent: number = 10) {
//   return value ** exponent;
// }

// console.log(pow(10));

// divide();
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));

// function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((p, c) => p + c, 0);
// }

// console.log(add(10, 10, 10, 10, 10));

// type Negate = (value: number) => number;

// // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
// const negateFunction: Negate = (value) => value * -1;

// console.log(negateFunction(10));
