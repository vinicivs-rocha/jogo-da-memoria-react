function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}

function aluno(nome, n1, n2) {
        this.name = nome
        this.firstGrade = n1
        this.secondeGrade = n2
        this.mean = function () {
            return (this.secondeGrade + this.firstGrade) / 2
        }
}

var alunos = {
    nome: "Igor",
    notas: [7, 8],
    media: () => {
        return (alunos.notas[0] + alunos.notas[1]) / 2
    }
}
var alunosNew = {
    nome: 'Igor',
    notas: [7, 8],
    media: calcMedia
}

var turma = [
    new aluno('Igor', 9, 6),
    new aluno('João', 7, 4),
    new aluno('Marcela', 8, 7.5)
]

console.log(alunos.nome + ' teve a média ' + alunos.media())
console.log(alunosNew.nome + ' teve a média ' + alunosNew.media())
turma.forEach(element => {
    console.log('O aluno ' + element.name + ' tirou as notas ' + element.firstGrade + ' e ' + element.secondeGrade + ' com a média ' + element.mean())
})
