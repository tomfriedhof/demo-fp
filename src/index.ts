import * as App from './pure-function';
import * as R from 'ramda';

const calc = new App.Calculator();

// curry function
const add = R.curry(calc.addPure);

const appDiv: HTMLElement = document.getElementById('app');

// Controlling code
let curriedFunction = add(10);
let val = curriedFunction(5);

// Pure Function Example
appDiv.innerHTML = val as any;

