"use strict";

var alunos = ["Alef", "Karol", "Sarah", "Edson", "Laudiceia"];
var prova = alunos.map(function (nomeAtual) {
  var notaAleatoria = Math.floor(Math.random() * 10);
  return {
    nome: nomeAtual,
    nota: notaAleatoria
  };
});
console.log(prova);
var filtraAlunoNaMedia = function filtraAlunoNaMedia(aluno) {
  return aluno.nota >= 6;
};
var passouNaProva = prova.filter(filtraAlunoNaMedia);
console.log(passouNaProva);