export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function monthRate(ratePerHour, discount) {
  const originalMonthRate = (ratePerHour * 8) * 22;
  const dis = originalMonthRate * discount;
  const finalMonthRate = Math.ceil(originalMonthRate - dis);
  return finalMonthRate;
}

export function daysInBudget(budget, ratePerHour, discount) {
  const originalDayRate = ratePerHour * 8;
  const dis = originalDayRate * discount;
  const finalDayRate = originalDayRate - dis;
  const daysInBudget = Math.floor(budget / finalDayRate);
  return daysInBudget;
}

function applyDiscount(value, percentage) {
  throw new Error('Implement the applyDiscount function');
}
