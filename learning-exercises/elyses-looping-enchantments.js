export const cardTypeCheck = (stack, cardType) => {
  let count = 0;
  stack.forEach(card => card === cardType ? count++ : count);
  return count;
}

export const determineOddEvenCards = (stack, type) => {
  let count = 0;
  stack.forEach(card => type 
    ? card % 2 ? count : count++
    : card % 2 ? count++ : count
  );
  return count;
}
