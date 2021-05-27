function over() {
    this.style.backgroundColor = 'black'
    this.style.color = 'white'
}

function key(tecla) {
    let keyText = document.createElement('p')
    keyText.innerHTML = 'a tecla foi: ' + tecla.key
    document.body.appendChild(keyText)
}

let el = document.getElementsByTagName('h1')[0]

el.addEventListener('mouseover', over)
window.addEventListener('keydown', key)
