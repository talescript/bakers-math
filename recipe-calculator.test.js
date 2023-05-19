const RecipeCreator = require('./recipe-calculator')

const bc = require('./bakers-calculator');

// Test the ingredientPercentage function
test('Calculate ingredient percentage correctly', () => {
  expect(bc.ingredientPercentage(300, 500)).toBe(60);
  expect(bc.ingredientPercentage(750, 1000)).toBe(75);
  expect(bc.ingredientPercentage(20, 1000)).toBe(2);
});

// Test the RecipeCreator class
describe('RecipeCreator', () => {
  test('Create recipe with default quantity', () => {
    const create = new RecipeCreator('Pizza', 120);
    create.addIngredient('Water', 60);
    create.addIngredient('Yeast', 2);
    create.addIngredient('Salt', 1);
    const recipe = create.createRecipe();

    expect(recipe.product).toBe('Pizza');
    expect(recipe.individualWeight).toBe(120);
    expect(recipe.quantity).toBe(1);
    expect(recipe.ingredients).toHaveLength(3);
    expect(recipe.ingredients).toContainEqual({ name: 'Water', weight: 72 });
    expect(recipe.ingredients).toContainEqual({ name: 'Yeast', weight: 2.4 });
    expect(recipe.ingredients).toContainEqual({ name: 'Salt', weight: 1.2 });
  });

  test('Create recipe with custom quantity', () => {
    const create = new RecipeCreator('Buns', 200);
    create.setQuantity(4);
    create.addIngredient('Flour', 100);
    create.addIngredient('Water', 60);
    const recipe = create.createRecipe();

    expect(recipe.product).toBe('Buns');
    expect(recipe.individualWeight).toBe(200);
    expect(recipe.quantity).toBe(4);
    expect(recipe.ingredients).toHaveLength(2);
    expect(recipe.ingredients).toContainEqual({ name: 'Flour', weight: 800 });
    expect(recipe.ingredients).toContainEqual({ name: 'Water', weight: 480 });
  });
});
