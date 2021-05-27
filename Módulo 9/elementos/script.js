function attVal(attName) {
    return id.getAttribute(attName)
}

let id = document.getElementById('id')
let classe = document.getElementsByClassName('class')
let tag = document.getElementsByTagName('div')

for (const i of [id, classe, tag, attVal('issomemo')]) {
    console.log(i)
}

id.setAttribute('issomemo', '13')
console.log(attVal('issomemo'))

id.innerHTML = '<p>inserido com js</p>'
id.innerText += '\n<p>inserido com js</p>'
id.className = 'difClass'

console.log(document.body.children)
