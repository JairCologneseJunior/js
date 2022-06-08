const str = 'Mozilla'; 
 
console.log(str.substring(1, 3)); 
// Saída esperada: "oz" 
 
console.log(str.substring(2));
 // Saída esperada: "zilla" 
const str1 = 'A raposa é um animal esperto'; 
 
const palavras = str1.split(' ');
 console.log(palavras[3]);
  // Saída esperada: "um" 
 
const chars = str1.split(''); 
console.log(chars[7]); 
// Saída esperada: "a" 
const strCopy = str1.split(); 
console.log(strCopy); 
// Saída esperada: Array ["A raposa é um animal esperto"]



