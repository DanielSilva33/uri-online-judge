let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

const diff = (A * B - C * D);

console.log("DIFERENCA = " + diff);
