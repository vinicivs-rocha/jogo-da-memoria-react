let image = document.getElementById('parede')
let lista = document.getElementsByTagName('ul')[0]

image.addEventListener('click', () => {
    image.setAttribute('src', '../Módulo 6/Página de Captura/images/people.jpg')
})
for (let i = 1; i <= parseInt(lista.dataset.num); i++) {
    let item = document.createElement("li")
    item.innerHTML = i
    lista.appendChild(item)
}
