const RecipeCreator = require('./recipe-calculator')

// Example usage
const creator = new RecipeCreator('Pizza', 120);

creator.setQuantity(10); // Set the desired quantity to 10

creator.addIngredient('Water', 60);
creator.addIngredient('Yeast', 2);
creator.addIngredient('Salt', 1);
creator.addIngredient('Sugar', 5);
creator.addIngredient('Sourdough', 8);

const recipe = creator.createRecipe();

console.log(recipe);
console.log(recipe.quantity);
console.log(recipe.ingredients[0].name);
console.log(recipe.ingredients[0].weight);