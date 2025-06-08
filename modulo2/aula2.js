//Objeto é definido como uma coleção de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor.
const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro'
};
// Acessando propriedades do objeto
console.log(pessoa); // Saída: João

pessoa.idade = 31; // Modificando a propriedade idade
console.log(`Nova idade: ${pessoa.idade}`); // Saída: 31

//Entendendo sobre arrays
const numeros = [1, 2, 3, 4, 5]; // Definindo um array
// Acessando elementos do array
console.log("Array")
console.log(numeros[0]); 
console.log(numeros[2]); 
console.log(numeros)