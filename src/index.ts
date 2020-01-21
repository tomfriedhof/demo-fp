import * as App from './pure-function';

const calc = new App.Calculator();
calc.getRandomNumber();

const appDiv: HTMLElement = document.getElementById('app');

// Pure Function Example
appDiv.innerHTML = calc.addPure(1, 1) as any;

/*
// Impure Function Example
calc.setState(5);
appDiv.innerHTML = calc.addImpure(1, 1) as any;

/*
// Impure Function calling http
setTimeout(() => {
    appDiv.innerHTML = calc.addImpure(1, 1) as any;
}, 2000);
/*
*/
