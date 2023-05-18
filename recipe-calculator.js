const { ingredientPercentage, ingredientWeight } = require('./bakers-calculator');

class RecipeCreator {
  constructor(product, individualWeight) {
    this.product = product;
    this.individualWeight = individualWeight;
    this.ingredients = [];
    this.quantity = 1; // Default quantity is 1
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  addIngredient(name, percentage) {
    this.ingredients.push({ name, percentage });
  }

  createRecipe() {
    let totalPercentage = 100;
    let totalWeight = this.individualWeight * this.quantity;

    for (const ingredient of this.ingredients) {
      totalPercentage += ingredient.percentage;
    }

    const flourWeight = (this.individualWeight * 100) / totalPercentage;

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
      const ingredientWeightValue = ingredientWeight(ingredient.percentage, this.individualWeight) * this.quantity;
      recipe.ingredients.push({ name: ingredient.name, weight: ingredientWeightValue });
    }

    return recipe;
  }
}

module.exports = RecipeCreator;
