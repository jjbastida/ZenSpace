export const enterKeyIsPressed = (event) => event.key === 'Enter' || event.code === 'Enter' || event.which === 13;
export const tabKeyIsPressed = (event) => event.key === 'Tab' || event.code === 'Tab' || event.which === 9;
export const backspaceKeyIsPressed = (event) => event.key === 'Backspace' || event.key === 'Backspace' || event.which === 8;
export const downKeyIsPressed = (event) => event.key === 'ArrowDown' || event.code === 'ArrowDown' || event.which === 40;
export const upKeyIsPressed = (event) => event.key === 'ArrowUp' || event.code === 'ArrowUp' || event.which === 38;