import * as App from './pure-function';
import * as R from 'ramda';

const calc = new App.Calculator();

// curry function
const add = R.curry(calc.addPure);

// compose
const result = R.compose(R.divide(150), R.multiply(5), add(10));

const appDiv: HTMLElement = document.getElementById('app');

// Controlling code
let val = result(5);

// Pure Function Example
appDiv.innerHTML = val as any;

