let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let media = parseFloat(((A * 2) + (B * 3) + (C * 5))/10).toFixed(1);

console.log("MEDIA = " + media);
