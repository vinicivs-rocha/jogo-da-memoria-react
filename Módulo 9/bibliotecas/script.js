function rannum() {
    return Math.round(Math.random() * 10)
}

function desconstruir(object) {
    return JSON.stringify(object)
}

function objetificar(string) {
    return JSON.parse(string)
}

const ob = {
    val1: 1,
    val2: '2',
}
console.log(rannum())
console.log(desconstruir(ob))
console.log(objetificar(desconstruir(ob)))

localStorage.setItem('per', 'armin')
