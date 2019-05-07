'use strict';

const welcome = person => {
	console.log(`Greetings, ${person.name}!`);
}

const people = [
	{ name : 'Strawberry Unicorn' },
	{ name : 'Nikolas Gloom' },
	{ name : 'Bethany Tusen' },
];

for (const person of people) {
	welcome(person);
}
