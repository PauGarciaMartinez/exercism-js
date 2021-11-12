const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (colors) => {
  return parseInt(colors.map(color => COLORS.indexOf(color)).slice(0, 2).join(''));
};
