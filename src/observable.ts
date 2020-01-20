import { fromEvent } from "rxjs";

export const clickEvents$ = fromEvent(document, 'click');
