var nArray = new Array() 
var sArray = ['a', 'b', 'c']

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function alphabet(ab) {
    for (const letter of ab) {
        console.log(letter);
    }
}

function media(n1, n2) {
    return (parseInt(n1) + parseInt(n2)) / 2
}

var anonfunc = () => {
    return 'oie'
}

alphabet(sArray)

console.log(media(prompt('Nota 1:'), prompt('Nota 2:')));
console.log(anonfunc());
