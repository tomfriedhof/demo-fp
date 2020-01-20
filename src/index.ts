import * as App from './pure-function';

const calc = new App.Calculator();

const appDiv: HTMLElement = document.getElementById('app');

// Controlling code
let val = calc.addPure(1, 1);
val = calc.addPure(5, val);
val = calc.addPure(7, val);

// Pure Function Example
appDiv.innerHTML = val as any;

