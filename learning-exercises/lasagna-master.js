export const cookingStatus = remainingTime => 
  remainingTime === 0 
    ? 'Lasagna is done.' 
    : remainingTime === undefined 
        ? 'You forgot to set the timer.'
        : 'Not done, please wait.';

export const preparationTime = (layers, prepTime = 2) => layers.length * prepTime;

export const quantities = (ingredients) => {
  return { noodles: ingredients.filter(i => i === 'noodles').length * 50, sauce: ingredients.filter(i => i === 'sauce').length * 0.2 }
}

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1]);
}

export const scaleRecipe = (recipe, portions) => {
  
}
