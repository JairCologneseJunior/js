console.clear();
const e = '10';
if (e=== 10) console.log('e é o numero 10');
else {
    console.log(`resultado da condição: ${e === 10}`);
    console.log(`e nao é o numero 10`);
}
// Multiplas condições 
console.clear();
const f = 4;
const g = 11;

if ( f > 5 || g > 10) {
    console.log(`condição é ${ f > 5 || g> 10}`);
    console.log('f e maior que 5 ou g nao e maior do 10');
} else console.log( 'f nao e maior que 5 e g nao e maior do 10');

if (f > 5 && g > 10) console.log('f e maior do que 5 e o g e maior do 10');
else{
    console.log(`condição e ${ f > 5 && g >10 }`);
    console.log('f nao e maior do que 5 ou g nao e maior do 10');
}
console.clear();
const num = 'ola';
 if (num % 2 == 0 && !isNaN(num)) console.log('numero par');
 else console.log('Nao e um numero');
 