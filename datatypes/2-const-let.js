'use strict';

console.dir({ bubbleEffect });

var bubbleEffect = 5;
let scalarVariable = 6;
const scalarConst = 7;

const o = { scalarVariable, scalarConst };
console.dir(o);

o.scalarVariable = 8;
scalarVariable = 9;

console.dir(o);
