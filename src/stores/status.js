import { writable } from 'svelte/store';

export const status = writable('Gotowy do rzutu');
export const uiActive = writable(true);