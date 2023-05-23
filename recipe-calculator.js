const { ingredientPercentage, ingredientWeight } = require('./bakers-calculator');

class RecipeCreator {
  constructor(product, individualWeight, quantity) {
    this.product = product;
    this.individualWeight = individualWeight;
    this.ingredients = [];
    this.quantity = quantity; // Default quantity is 1
  }

  // setQuantity(quantity) {
  //   this.quantity = quantity;
  // }

  addIngredient(name, percentage) {
    this.ingredients.push({ name, percentage });
  }

  createRecipe() {
    let totalPercentage = 100;
    let totalWeight = this.individualWeight * this.quantity;

    for (const ingredient of this.ingredients) {
      totalPercentage += ingredient.percentage;
    }

    const totalFlour = (totalWeight / totalPercentage) * 100;
    const flourWeight = Math.round(totalFlour);


    const recipe = {
      product: this.product,
      individualWeight: this.individualWeight,
      quantity: this.quantity,
      totalPercentage,
      totalWeight,
      flourWeight,
      ingredients: [],
    };

    for (const ingredient of this.ingredients) {
      const ingredientWeightValue = (ingredientWeight(ingredient.percentage, this.individualWeight) * totalFlour / 100);
      recipe.ingredients.push({ name: ingredient.name, weight: Math.round(ingredientWeightValue) });
    }

    return recipe;
  }
}

const create = new RecipeCreator('loaf', 100, 20)
create.addIngredient('Water', 63)
create.addIngredient('Salt', 2)
create.addIngredient('Yeast', 1.4)

const recipe = create.createRecipe()
console.log(recipe)



module.exports = RecipeCreator;
