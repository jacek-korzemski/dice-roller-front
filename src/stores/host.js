import { readable } from 'svelte/store';

export const host = readable('http://localhost:5000');
// export const host = readable('https://dice-roller-node.herokuapp.com');