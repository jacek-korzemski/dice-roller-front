import { writable } from 'svelte/store';

export const host = writable('http://localhost:5000');
//export const host = writable('https://dice-roller-node.herokuapp.com');