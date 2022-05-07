const FRONT = 'front'
const BACK = 'back'
const CARD = 'card'
const ICON = 'icon'

function createCardFace(face, card, element) {
    let cardFaceElement = document.createElement('div')
    cardFaceElement.classList.add(face)

    if (face == FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = `./assets/images/${card.icon}.png`
        iconElement.alt = `${card.icon} logo`
        cardFaceElement.appendChild(iconElement)
    } else if (face == BACK) {
        cardFaceElement.innerHTML = '&lt;/&gt;'
    }
    element.appendChild(cardFaceElement)
}

function createCardContent(card, element) {
    createCardFace(FRONT, card, element)
    createCardFace(BACK, card, element)
}

function insertCards() {
    let gameBoard = document.querySelector('#gameBoard')

    gameBoard.innerHTML = ''
    game.cards.forEach((card) => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon
        createCardContent(card, cardElement)
        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    })
}

function startGame() {
    game.createCards()
    insertCards()
}

function restart() {
    game.clearCheck()
    startGame()
    let gameOverLayer = document.querySelector('#gameOver')
    gameOverLayer.style.display = 'none'
}

startGame()
