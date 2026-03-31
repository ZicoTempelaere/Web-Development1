const setup = () => {
    /* Globale variabelen */
    const AANTAL_HORIZONTAAL = 4;
    const AANTAL_VERTICAAL = 3;
    const AANTAL_KAARTEN = 6;

    let images = ['kaart1.jpg','kaart2.jpg','kaart3.png','kaart4.jpg','kaart5.jpg','kaart6.jpg'];
    let gameBoard = document.getElementById('game-board');
    let flippedCards = [];
    let isBusy = false;

    /* Maak een array van 12 kaarten (2 van elke) en shuffle */
    let cardArray = [...images, ...images];
    shuffleArray(cardArray);

    /* Functie om array te shufflen */
    function shuffleArray(array) {
        for (let i = array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /* Dynamisch kaarten toevoegen */
    cardArray.forEach((img) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = img;
        card.addEventListener('click', handleCardClick);
        gameBoard.appendChild(card);
    });

    /* Klik handler */
    function handleCardClick(e) {
        if (isBusy) return;
        let card = e.currentTarget;
        if (flippedCards.includes(card) || card.classList.contains('correct')) return;

        flipCard(card);

        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }

    /* Kaart omdraaien */
    function flipCard(card) {
        card.style.backgroundImage = `url('images/${card.dataset.image}')`;
        card.classList.add('flipped');
    }

    /* Kaarten terugdraaien */
    function unflipCard(card) {
        card.style.backgroundImage = `url('./images/achterkant.png')`;
        card.classList.remove('flipped');
    }

    /* Checken op match */
    function checkMatch() {
        isBusy = true;
        let [card1, card2] = flippedCards;

        if (card1.dataset.image === card2.dataset.image) {
            // Match gevonden
            card1.classList.add('correct');
            card2.classList.add('correct');
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');

            flippedCards = [];
            isBusy = false;
            checkGameEnd();
        } else {
            // Fout: visuele feedback en terugdraaien na 1 sec
            card1.classList.add('wrong');
            card2.classList.add('wrong');
            setTimeout(() => {
                unflipCard(card1);
                unflipCard(card2);
                card1.classList.remove('wrong');
                card2.classList.remove('wrong');
                flippedCards = [];
                isBusy = false;
            }, 1000);
        }
    }

    /* Einde spel */
    function checkGameEnd() {
        let remaining = document.querySelectorAll('.card:not(.correct)');
        if (remaining.length === 0) {
            alert("Gefeliciteerd! Je hebt alle kaarten gevonden!");
        }
    }
}

/* Zorg dat setup pas uitgevoerd wordt als alles geladen is */
window.addEventListener("load", setup);