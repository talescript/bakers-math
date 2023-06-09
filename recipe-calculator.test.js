const RecipeCreator = require('./recipe-calculator');

test('Create recipe with default quantity', () => {
  const creator = new RecipeCreator('Buns', 100, 10);
  creator.addIngredient('Water', 60);
  creator.addIngredient('Yeast', 1.4);
  creator.addIngredient('Salt', 2);

  const recipe = creator.createRecipe();

  expect(recipe.product).toBe('Buns');
  expect(recipe.individualWeight).toBe(100);
  expect(recipe.quantity).toBe(10);
  expect(recipe.totalPercentage).toBe(163.4);
  expect(recipe.totalWeight).toBe(1000);
  expect(recipe.flourWeight).toBe(612);
  expect(recipe.ingredients).toEqual([
    { name: 'Water', weight: 367 },
    { name: 'Yeast', weight: 9 },
    { name: 'Salt', weight: 12 },
  ]);
});

test('Create recipe with custom quantity', () => {
  const creator = new RecipeCreator('Buns', 100, 20);
  creator.addIngredient('Water', 60);
  creator.addIngredient('Yeast', 1.4);
  creator.addIngredient('Salt', 2);

  const recipe = creator.createRecipe();

  expect(recipe.product).toBe('Buns');
  expect(recipe.individualWeight).toBe(100);
  expect(recipe.quantity).toBe(20);
  expect(recipe.totalPercentage).toBe(163.4);
  expect(recipe.totalWeight).toBe(2000);
  expect(recipe.flourWeight).toBe(1224);
  expect(recipe.ingredients).toEqual([
    { name: 'Water', weight: 734 },
    { name: 'Yeast', weight: 17 },
    { name: 'Salt', weight: 24 },
  ]);
});
