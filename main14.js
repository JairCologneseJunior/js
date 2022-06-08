// Outro exemplo do filter 
console.clear();
const meuArray = [
    {nome: 'apples', quantidade: 2},
    {nome: 'bananas', quantidade: 0},
    {nome: 'cerejas', quantidade: 5},
];
console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);