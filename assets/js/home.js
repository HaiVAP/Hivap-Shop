// ====== log-out ================
const showLogOut = document.getElementById('log-out').addEventListener('click', function(e) {
    e.preventDefault();

    window.location.href = "/pages/login.html"
});

// ==== feedback ======= 
const cardWrapper = document.querySelector('.feedback-content');
const cards = document.querySelectorAll('.feedback-item');
const cardWidth = cards[0].offsetWidth + 30; // card width + margin
const visibleCards = 3;
let currentPosition = 0;

document.getElementById('next').addEventListener('click', () => {
    if (currentPosition < cards.length - visibleCards) {
        currentPosition++;
        updateCarousel();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        updateCarousel();
    }
});

function updateCarousel() {
    // Calculate and apply the new transform based on currentPosition
    cardWrapper.style.transform = `translateX(-${currentPosition * cardWidth}px)`;

    // Disable/enable buttons based on current position
    document.getElementById('prev').disabled = currentPosition === 0;
    document.getElementById('next').disabled = currentPosition === cards.length - visibleCards;
}
// hero
const cardheroWrapper = document.querySelector('.card-list');
const cardsHero = document.querySelectorAll('.card-item');
const cardHeroWidth = cardsHero[2 - 2].offsetWidth + 30; // card width + margin
const visibleCardsHero = 2;
let currentPositionHero = 0;
document.getElementById('next-hero').addEventListener('click', () => {
    if (currentPositionHero < cardsHero.length - visibleCardsHero) {
        currentPositionHero++;
        updateHero();
    }
});
document.getElementById('prev-hero').addEventListener('click', () => {
    if (currentPositionHero > 0) {
        currentPositionHero--;
        updateHero();
    }
});

function updateHero() {
    cardheroWrapper.style.transform = `translateX(-${currentPositionHero * cardHeroWidth}px)`;
    document.getElementById('prev-hero').disabled = currentPositionHero === 0;
    document.getElementById('next-hero').disabled = currentPositionHero === cardsHero.length - visibleCardsHero;
}