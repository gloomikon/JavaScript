'use strict';

//Constants

const SALUTATION = 'Grretings';

const COLORS = [
	/* 1 */ 'black',
	/* 2 */ 'red',
	/* 3 */ 'green',
	/* 4 */ 'yellow',
	/* 5 */ 'blue',
	/* 6 */ 'magneta',
	/* 7 */ 'cyan',
	/* 8 */ 'white'
];

//Functions

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorise = name => {
	let res = '';
	const letters = name.split('');
	let color = 1;
	for (const letter of letters) {
		res += colorer(letter, color++);
		if (color > COLORS.length) {
			color = 1;
		}
	}
	return res;
}
		
const greetings = name => (
	name.includes('Kolumbia') ? 
		`${SALUTATION}, ${colorise(name)}!` :
		`Hello, ${name}!`
);

// Usage
const gloomikon = 'Nikolas Gloom aka Kolumbia';
const strawberry = 'Strawberry Unicorn';

console.log(greetings(gloomikon));
console.log(greetings(strawberry));