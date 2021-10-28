export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((a, b) => a + b);
}

export function birdsInWeek(birdsPerDay, week) {
  const interval = 7;
  const weekCount = [];
  while (birdsPerDay.length >= interval) {
      weekCount.unshift(birdsPerDay.splice(-interval, interval));
  }
  return weekCount[week - 1].reduce((a, b) => a + b);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
  }
  return birdsPerDay;
}
