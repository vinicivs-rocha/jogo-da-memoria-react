var separacao = "---------------------------------------------------------------------------------"

var nome = prompt('seu nome:') 
if (nome == 'shikamaru') {
    var gosto = prompt('Gostou do anime?')
    if (gosto == 'sim') {
        alert('brabo')
    } else{
        alert('cring')
    }
} else {
    alert('assista naruto, ' + nome)
}

console.log(separacao)

nome == 'shikamaru' ? console.log('gostou?') : console.log('assista naruto, ' + nome)

console.log(separacao)

switch (nome) {
    case "shikamaru":
        console.log('gostou?')
        break;

    default:
        console.log('assista naruto, ' + nome)
        break;
}
