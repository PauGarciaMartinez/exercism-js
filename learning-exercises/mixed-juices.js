export function timeToMixJuice(name) {
  const juiceTime = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5
  };

  return juiceTime[name] ?? 2.5;
}

export function limesToCut(wedgesNeeded, limes) {
  const wedgesPerLime = {
    'small': 6,
    'medium': 8,
    'large': 10
  };
  
  let totalWedges = 0;
  let limesNeeded = 0;

  limes.forEach(size => {
    if (totalWedges < wedgesNeeded) {
      totalWedges += wedgesPerLime[size];
      limesNeeded++;
    }
  });
  
  return limesNeeded;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
