console.log("17 - 18 chapter");

console.log(' -----------------------------01 empty array');
var empty = [[]];
console.log(empty);

console.log(' -----------          ----------02 multidimensional array');
var multidimensional = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(multidimensional);

console.log('---------------------------------- 03 print numeric counting from 1 to 10');
for (var nCounting = 1; nCounting <= 10; nCounting++) {
    console.log(nCounting)
}

console.log('----------------------  04 input from user *comminted');
var number = +prompt('add number');
var lenght = +prompt('add lenght');
for (var i = 1; i <= lenght; i++) {
    console.log(number + ' x ' + i + ' = ' + number * i);
}

console.log('---------------------   ------ 05 print items');
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (var fruites = 0; fruites <= 4; fruites++) {
    console.log('Element at index is ' + fruites + ' ' + fruits[fruites]);
}

console.log('--------------      06  Generate series');
for (var Counting = 1; Counting <= 15; Counting++) {
    console.log(Counting);
}
console.log('--------------    07  Reverse counting');
for (var Reverse = 10; Reverse >= 1; Reverse--) {
    console.log(Reverse);
}
console.log('--------------    08  Even');
for (var Even = 0; Even <= 20; Even++) {
    console.log((Even % 2) + Even);
}
console.log('--------------   09   odd');
for (var odd = 1; odd <= 19; odd++) {
    console.log((odd % 2 === 0) + odd);
}
console.log('--------------   10   Series:');
for (var Series = 1; Series <= 10; Series++) {
    console.log((Series * 2 + ' k'));
}



console.log('                            Happy Ending 😉');