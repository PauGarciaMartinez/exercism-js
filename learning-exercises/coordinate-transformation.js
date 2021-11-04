export function translate2d(dx, dy) {
  return function moveCoordinatesRight(x, y) {
    return [x + dx, y + dy];
  };
}

export function scale2d(sx, sy) {
  return function moveCoordinatesRight(x, y) {
    return [x * sx, y * sy];
  };
}

export function composeTransform(moveCoordinatesRight, doubleCoordinates) {
  return (x, y) => doubleCoordinates(...moveCoordinatesRight(x, y));
}

export function memoizeTransform(f) {
  let savedX, savedY, savedResult;
  return function (x, y) {
    if (x !== savedX || y !== savedY) {
      savedX = x;
      savedY = y;
      savedResult = f(x, y);
    }
    return savedResult;
  };
}
