'use strict';

const welcome = person => {
	console.log(`Greetings, ${person.name}!`);
}

const people = {
	strawbery:	{ name : 'Strawberry Unicorn' },
	gloomikon:	{ name : 'Nikolas Gloom' },
	bt:			{ name : 'Bethany Tusen' },
};

for (const name in people) {
	welcome(people[name]);
}
