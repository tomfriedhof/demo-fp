import * as App from './observable';

const clicks$ = App.clickEvents$;

const appDiv: HTMLElement = document.getElementById('app');

clicks$.subscribe((val: any) => {
    appDiv.innerHTML = `${val.screenX}, ${val.screenY}`;
});

