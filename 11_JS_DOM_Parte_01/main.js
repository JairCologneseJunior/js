// JavaScript e DOM 
// objeto document 
console.log(document);
console.clear();

// acessar informações

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// alterar o titulo
document.title = 123;

//criar um elemento <h1>

let heading = document.createElement('h1');
heading.innerHTML = 'Como irei amar alguem se eu nao amo a mim mesmo';
document.body.appendChild(heading);
cabecalho.style.borderbottom = 'solid 12px #000';

