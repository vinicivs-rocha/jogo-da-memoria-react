var boletins = [
                ['Igor' , 7.0, 8.0], 
                ['José', 6.5, 7.0], 
                ['Maria', 9.5, 8.5]
]

function funcmedia(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    var resultado = 'reprovado'

    if (media >= 7){
        resultado = 'aprovado'
    }

    return resultado
}

for (const dadoAluno of boletins) {
    var nome = dadoAluno[0]
    var nota1 = dadoAluno[1]
    var nota2 = dadoAluno[2]
    var media = funcmedia(nota1, nota2)

    console.log(nome + ' - ' + nota1 + ' - ' + nota2 + ' - ' + media + ' - ' + passou(media));
}
