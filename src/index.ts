import * as App from './pure-function';
import * as R from 'ramda';

const calc = new App.Calculator();

// curry function
const add = R.curry(calc.addPure);

// compose
const add10 = R.compose(add(10));

const appDiv: HTMLElement = document.getElementById('app');

// Controlling code
let val = add10(15);

// Pure Function Example
appDiv.innerHTML = val as any;

