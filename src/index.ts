import { clickEvents$, seconds$} from "./observable";

const appDiv: HTMLElement = document.getElementById('app');

seconds$.subscribe((val: any) => {
    appDiv.innerHTML = val;
});

clickEvents$.subscribe((val: any) => {
    appDiv.innerHTML = `${val.screenX}, ${val.screenY}`;
});

