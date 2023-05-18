/**
 * Baker's Percentage = (Ingredient Weight / Flour Weight) * 100
 * 
 * To calculate the Baker's Percentage of a specific ingredient 
 * in a bread formula, you divide the weight of that ingredient 
 * by the weight of the flour and then multiply the result by 
 * 100. This formula allows you to express the relative 
 * proportions of ingredients in a recipe based on the weight 
 * of the flour as the reference point.
 */

/**
 * Expects the values to be positive
 * 
 * @param {number} ingredientWeight 
 * @param {number} doughWeight 
 * @returns {number} an Ingredient Percentage
 */
function ingredientPercentage(ingredientWeight, doughWeight) {

    try {
        if (typeof ingredientWeight !== 'number' || typeof doughWeight !== 'number') {
            throw new Error('Both ingredientWeight and doughWeight must be numeric values')
        }
    
        if (doughWeight === 0) {
            throw new Error('doughWeight must be higher than zero.')
        }
    
        if (isNaN(ingredientWeight) || isNaN(doughWeight)) {
            throw new Error('Nan')
        }
          
        const percentage = (ingredientWeight / doughWeight * 100);
        const roundedPercentage = percentage >= 0 ? Math.floor(percentage) : Math.ceil(percentage);
    
        return roundedPercentage;

    } catch (error) {
        return `Error: ${error.message}`;
    }
}


/**
 * Expects the values to be positive 
 * ingredientPercent takes an int
 * 
 * 
 * @param {number} ingredientPercent 
 * @param {number} doughWeight Takes the total amount of flour 
 * @returns the weight of an ingredient 
 */
function ingredientWeight(ingredientPercent, doughWeight) {

    try {
        if (typeof ingredientPercent !== 'number' || typeof doughWeight !== 'number') {
            throw new Error('Both ingredientPercent and doughWeight must be numeric values.');
        }

        if (isNaN(ingredientPercent) || isNaN(doughWeight)) {
            throw new Error('Nan')
        }

        if (!Number.isInteger(ingredientPercent)) {
            throw new Error('The program converts the value into a float');
        }
    
        if (doughWeight === 0) {
            throw new Error('doughWeight must be higher than zero.');
        }

    
        const weight = (ingredientPercent / 100) * doughWeight;
        const roundedWeight = weight >= 0 ? Math.floor(weight * 100) / 100 : Math.ceil(weight * 100) / 100;
    
        return Number(roundedWeight.toFixed(2));
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

module.exports = { ingredientPercentage, ingredientWeight }

