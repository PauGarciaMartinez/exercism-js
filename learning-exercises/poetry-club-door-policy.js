export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}

export function backDoorResponse(line) {
  const response = line.trim();
  return response.charAt(response.length - 1);
}

export function backDoorPassword(word) {
  return `${frontDoorPassword(word)}, please`;
}
