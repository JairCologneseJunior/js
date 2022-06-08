// conectar strings
let valor01 = 100; 
const valor02 = 5; 
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 * valor02 ); 
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`); 
// metodos de strings
console.clear();
const string01 = 'instituto da oportunidade social';

//acessando o primeiro caractere
console.log(string01.charAt(1));
console.log(string01[0]);
//acessando o decimo primeiro caractere
console.log(string01.charAt());
console.log(string01[1]);
console.clear();
let texto = 'abcdefghijklmnopqrstuvwxyz';
console.log(texto.length);
console.clear(); 
const texto2 = 'Também 123 [] é uma strings 231 -1\n'; 
console.log(texto2.length); 
//Maiusculo e minusculo
console.clear();
const s = 'Hello World';

console.log(s.toUpperCase());
console.log(s.toLowerCase());

const str1 = 'A raposa e um animal sperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
//saida esperada "um"

const chars = str1.split(' ');
console.log(chars[7]);
//saida esperada "a"
const strCopy = str1.split('');
console.log(strCopy);
//saida esperada: attay ["a raposa e um animal esperto"]

console.clear();
 

