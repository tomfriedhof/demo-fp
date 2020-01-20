import { clickEvents$, seconds$} from "./observable";
import { combineLatest } from "rxjs";

const appDiv: HTMLElement = document.getElementById('app');

// seconds$.subscribe((val: any) => {
//     appDiv.innerHTML = val;
// });
//
// clickEvents$.subscribe((val: any) => {
//     appDiv.innerHTML = `${val.screenX}, ${val.screenY}`;
// });

const result$ = combineLatest(seconds$, clickEvents$);
result$.subscribe(([seconds, clicks]: [number, MouseEvent]) => {
    appDiv.innerHTML = `<h2>Seconds: ${seconds}</h2><p>${clicks.screenX}, ${clicks.screenY}</p>`;
})
