'use strict';

const MAX_VALUE = 10;

console.log('Start');
for (let i = 0; i < MAX_VALUE; ++i) {
	console.dir({i, date: new Date() });
}
console.log('End');
