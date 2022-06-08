//objetos

let pessoa = {
    firstName: 'jair',
    lastName: 'colognese junior',
    idade: 18,
    corDosOlhos: 'castanho',
    hobbies:['musica', 'filmes', 'esportes'],
    endereco: {
        rua: 'Rua do bobos',
        numero: 0,
        cidade: 'Joinville',
        esdado: 'Sp',

    },
};
console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

console.clear();
// Atribuição via desestruturação com arrays
const{
    firstName,
    lastName,
    endereco:{cidade},
    idade,
}=pessoa;
console.log(`${firstName} ${lastName} e de ${cidade} e tem ${idade} de idade`);

console.clear();
const array = [1, 2, 3, 4, 5];
let [ valor01, valor02, valor03, ...resto]=array;
console.log(valor01);
console.log(valor02);
console.log(valor03);
console.log(resto);
console.clear(); 
// Array de objetos
const tarefas = [     
    {         id: 1,        
 texto: 'Levar o lixo para fora',         
 isCompleted: true,     },     
 { id: 2,         
    texto: 'Encontrar com o chefe',         
    isCompleted: true,     },     
    { id: 3,         
    texto: 'Consulta no dentista',         
    isCompleted: false,   
 },
]; 
 
console.log(tarefas); 
console.log(tarefas[1].texto); 
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted); 