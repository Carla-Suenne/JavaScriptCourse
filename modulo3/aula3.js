//Um objeto ele pode ter características/PROPRIEDADES (nome,idade,...) como ele pode ter outros objetos

//Quando atribuímos uma função a um objeto, chamamos essa função de método

var pessoa={
    nome:"Carla",idade:24,altura:"1.63",peso:65
}

//as ações de pessoa são os métodos

pessoa.sexo="feminino"; //adicionando outra caracteristica/PROPRIEDADE ao objeto pessoa

pessoa.aniversario = function(){
    pessoa.idade +=1;
    return `Nova idade é ${pessoa.idade}`;
}
console.log(pessoa);
console.log(pessoa.aniversario()); //me mostra o retorno da função
console.log(pessoa); //nova idade modificada

