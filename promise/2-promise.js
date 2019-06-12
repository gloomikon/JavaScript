'use strict';

// Pending

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('value1');
	}, 0);
});
console.dir({ promise1 });
promise1.then(console.log);

// Immediate resolve

const promise2 = new Promise(resolve => resolve('value2'));
console.dir({ promise2 });
promise2.then(console.log);

// Immediate reject

const promise3 = new Promise((resolve, reject) => {
	reject(new Error('I have no value for you'));
});
console.dir({ promise3 });
promise3.then(console.log).catch(console.log);

// Promise.resolve

const promise4 = Promise.resolve('value4');
console.dir({ promise4 });
promise4.then(console.log);

// Promise.reject

const promise5 = Promise.reject(new Error('I have no value for you'));
console.dir({ promise5 });
promise5.then(console.log).catch(console.log);

// Example with I/O

const fs = require('fs');

const readFile = (filename, encoding) =>
	new Promise((resolve, reject) =>
		fs.readFile(filename, encoding, (err, data) =>
			err ? reject(err) : resolve(data.toString())));

readFile('file1.txt', 'utf8')
	.then(data => {
		console.log(data);
		return readFile('file2.txt', 'utf8');
	})
	.then(data => {
		console.log(data);
		return readFile('file3.txt', 'utf8');
	})
	.then(data => {
		console.log(data);
	});
