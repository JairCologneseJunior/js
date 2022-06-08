// let, const
console.log('Hello World');
console.error('Essa e uma menssagem de erro');
console.warn('Essa e uma menssagem de aviso');
console.clear();
let idade = 30;
const nome = 'nico';
console.log(nome);
console.log(idade);
idade = 31;
console.log(idade);
// String, Numbers, Boolean, Null, Undefined
console.clear();
const nome_pessoa = 'john';
const idade1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nome_pessoa); //type of const  
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.clear();
// conectando strigs
const pessoa = 'Irmao do Jorel';
const idade2 = 30;
console.log('meu nome é' + pessoa + 'e eu tenho' + idade2 +  'anos!');
const hello = `Meu nome é ${pessoa} e eu tenho ${idade2} anos!`;
console.log(hello);
// Operadores de comparação e lógica
console.clear();
let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;

console.log(teste1 > teste2); // Operador de comparação
console.log(teste1 < teste2); //Operador de comparação
console.log(teste1 && teste2); // Operação logica
console.log(valor1 && valor2); // operação logica


