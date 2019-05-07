'use strict';

const welcome = person => {
	console.log(`Greetings, ${person.name}!`);
}

const strawberry = { name : 'Strawberry Unicorn' };
const gloomikon = { name : 'Nikolas Gloom' };
const bt = { name : 'Bethany Tusen' };

welcome(strawberry);
welcome(gloomikon);
welcome(bt);
