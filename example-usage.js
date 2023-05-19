const RecipeCreator = require('./recipe-calculator')

// Example usage
const creator = new RecipeCreator('buns', 100);

creator.setQuantity(20);

creator.addIngredient('Water', 63);
creator.addIngredient('Yeast', 1.4);
creator.addIngredient('Salt', 2);
creator.addIngredient('Sugar', 5);
creator.addIngredient('Sourdough', 8);

const recipe = creator.createRecipe();

console.log(recipe);
console.log(`Recipe quantity: ${recipe.quantity}`);
console.log(`Recipe ingredient: ${recipe.ingredients[0].name}`);
console.log(`Recipe weight: ${recipe.ingredients[0].weight}`);