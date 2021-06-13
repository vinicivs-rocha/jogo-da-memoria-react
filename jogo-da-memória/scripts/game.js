let game = {
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
}
