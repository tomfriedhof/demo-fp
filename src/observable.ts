import { fromEvent, interval } from "rxjs";

export const clickEvents$ = fromEvent(document, 'click');
export const seconds$ = interval(1000);
