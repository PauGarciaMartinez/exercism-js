export function getFirstCard(deck) {
  return deck[0];
}

export function getSecondCard(deck) {
  return deck[1];
}

export function swapTopTwoCards(deck) {
  const [firstCard, secondCard, ...otherCards] = deck;
  return [secondCard, firstCard, ...otherCards];
}

export function discardTopCard(deck) {
  const [topCard, ...cards] = deck;
  return [topCard, cards];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

export function insertFaceCards(deck) {
  const [firstCard, ...otherCards] = deck;
  return [firstCard, ...FACE_CARDS, ...otherCards];
}
