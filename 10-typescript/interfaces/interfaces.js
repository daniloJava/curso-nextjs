"use strict";
function daUmsalve(pessoa) {
    console.log('Salvee! ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joanna';
}
var pessoa = {
    nome: 'juka',
    idade: 23,
    saudar: function (sobrenome) {
        console.log('ola meu nome é ' + this.nome + " " + sobrenome);
    }
};
daUmsalve(pessoa);
mudarNome(pessoa);
daUmsalve(pessoa);
pessoa.saudar('Oliveira');
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log('Meu nom é' + this.nome + ' ' + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Juka';
daUmsalve(meuCliente);
meuCliente.saudar(' pereira ');
var potencia;
potencia = function (base, exp) {
    return Math.pow(exp, base);
};
console.log(potencia(2, 10));
