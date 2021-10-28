export function needsLicense(kind) {
 return kind === 'car' || kind === 'truck' ? true : false;
}

export function chooseVehicle(option1, option2) {
  const options = [option1, option2].sort();
  return `${options[0]} is clearly the better choice.`;
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3){
    return originalPrice - (originalPrice * 0.2);
  } else if (age >= 3 && age <= 10) {
    return originalPrice - (originalPrice * 0.3);
  } else {
    return originalPrice - (originalPrice * 0.5);
  }
}
