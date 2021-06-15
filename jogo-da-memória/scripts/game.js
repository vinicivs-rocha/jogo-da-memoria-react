let game = {
    isGameLocked: false,
    firstCardCheck: null,
    secondCardCheck: null,
    flippedCards: 0,
    icons: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react',
    ],
    cards: null,
    createCards: function () {
        game.cards = []

        game.icons.forEach((element) => {
            game.cards.push(game.duplicate(element))
        })

        game.cards = game.cards.flatMap((pair) => pair)
        game.shuffleCards()
    },
    duplicate: function (original) {
        return [
            {
                id: game.createID(original),
                icon: original,
                flipped: false,
            },
            {
                id: game.createID(original),
                icon: original,
                flipped: false,
            },
        ]
    },
    createID: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    },
    shuffleCards: function () {
        let currentIndex = game.cards.length
        let randomIndex = 0

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            ;[game.cards[randomIndex], game.cards[currentIndex]] = [
                game.cards[currentIndex],
                game.cards[randomIndex],
            ]
        }
        return game.cards
    },
    cardCheck: function (currentCard) {
        let isFlipped = currentCard.classList.value === 'card flip'

        if (isFlipped || this.isGameLocked) {
            return false
        }

        if (!this.firstCardCheck) {
            game.firstCardCheck = currentCard
            return true
        } else {
            game.secondCardCheck = currentCard
            game.isGameLocked = true
            return true
        }
    },
    pairCheck: function () {
        if (!this.firstCardCheck || !this.secondCardCheck) {
            return false
        }
        return (
            this.firstCardCheck.dataset.icon ===
            this.secondCardCheck.dataset.icon
        )
    },
    clearCheck: function () {
        game.firstCardCheck = null
        game.secondCardCheck = null
        game.isGameLocked = false
    },
    isGameOver: function () {
        let children = document.getElementById('gameBoard').children
        for (let i = 0; i < children.length; i++) {
            let element = children.item(i);
            if (element.classList.value === 'card flip') {
                ++this.flippedCards
            }
        }
        if (this.flippedCards == 20) {
            return true
        } else {
            game.flippedCards = 0
            return false
        }
    }
}
