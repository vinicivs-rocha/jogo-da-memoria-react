// carne - 400 gramas por pessoa, se for mais de 6 horas vira 650 gramas
// cerveja - 1200 ml por pessoa, se for mais de 6 horas vira 2000 ml
// bebida normais - 1000 ml por pessoa, se for mais de 6 horas vira 1500 ml
// criancas = 1/2 pessoas

function barbCalc() {
    let adultQuant = parseInt(document.getElementById('adultQuant').value)
    let childQuant = parseInt(document.getElementById('childQuant').value)
    let barbDur = parseFloat(document.getElementById('barbDur').value)
    let contingent = adultQuant + childQuant * 0.5

    const meatQuantPara = document.getElementById('meatQuant')
    const beerQuantPara = document.getElementById('beerQuant')
    const normalQuantPara = document.getElementById('normalQuant')
    const meatQuant = () => {
        if (barbDur > 6) {
            return (650 * contingent) / 1000
        } else {
            return (400 * contingent) / 1000
        }
    }
    const beerQuant = () => {
        if (barbDur > 6) {
            return (2000 * adultQuant) / 1000
        } else {
            return (1200 * adultQuant) / 1000
        }
    }
    const normalQuant = () => {
        if (barbDur > 6) {
            return (1500 * contingent) / 1000
        } else {
            return (1000 * contingent) / 1000
        }
    }

    meatQuantPara.innerHTML = `${Math.ceil(meatQuant())}kg de carne`
    beerQuantPara.innerHTML = `${Math.ceil(beerQuant())} litros de cerveja`
    normalQuantPara.innerHTML = `${Math.ceil(normalQuant())} litros de bebidas normais`
}
