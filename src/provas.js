const alunos = ["Alef", "Karol", "Sarah", "Edson", "Laudiceia"];

const prova = alunos.map(function(nomeAtual) {
    const notaAleatoria = Math.floor(Math.random() * 10);

    return {
        nome: nomeAtual,
        nota: notaAleatoria
    }
})

console.log(prova);

const filtraAlunoNaMedia = (aluno) => aluno.nota >= 6;
const passouNaProva = prova.filter(filtraAlunoNaMedia)

console.log(passouNaProva);