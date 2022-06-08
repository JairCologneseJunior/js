//metodo forEach()
const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhafuncao);
function minhafuncao(item, index) {
    console.log(`indice: ${index}`);
    console.log(`Elemento: ${item}`);
}

// Método forEach() com Arrow Function
console.clear();

const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item)=>{
    console.log(`indice: ${index}`);
    console.log(`elemento: ${item}`);
});

// forEach() com array de objetos 
console.clear();

const tarefas = [
    {
        id:1,
        texto: 'levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'consulta no dentista',
        isCompleted: false,
    },
    {
      id: 3,
      texto: 'consulta com o dentista',
      isCompleted: false,
    },
];
tarefas.forEach((teste)=> console.log(teste.texto));
