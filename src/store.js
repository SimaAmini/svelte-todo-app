import { writable } from "svelte/store";

let tasks = writable([]);

export {tasks}