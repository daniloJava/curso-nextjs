"use strict";
// String
var nome = 'Jukinha';
console.log(nome);
// numbers 
var idade = 27;
console.log(idade);
idade = 28.9;
console.log(idade);
// boolean
var isMaior = false;
console.log(isMaior);
var minhaIdade;
minhaIdade = 24;
console.log(typeof minhaIdade);
// Array
var hobbies = ['jogar', 'caminhar'];
console.log(hobbies[1]);
console.log(typeof hobbies);
//tuplas 
var enderecos = ["avenida brasil", 90, 'bairro'];
console.log(enderecos);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Vermelho"] = 2] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log(minhaCor);
// Any
var carro = 'BMW';
console.log(carro);
