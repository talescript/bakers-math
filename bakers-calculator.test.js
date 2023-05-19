const bc = require('./bakers-calculator')

test('300g of water divided over 500g flour to equal 60', () => {
    expect(bc.ingredientPercentage(300, 500)).toBe(60);
});

test('750g of water divided over 1000g flour to equal 75', () => {
    expect(bc.ingredientPercentage(750, 1000)).toBe(75);
});

test('20g of salt divided over 1000g flour to equal 2', () => {
    expect(bc.ingredientPercentage(300, 500)).toBe(60);
});

test('200g of leaven divided over 1000 flour to equal 20', () => {
    expect(bc.ingredientPercentage(300, 500)).toBe(60);
});

test('doughWeight has to be higher than zero', () => {
    expect(bc.ingredientPercentage(300, 0)).toEqual('Error: doughWeight must be higher than zero.');
});

test('must be numeric values.', () => {
    expect(bc.ingredientPercentage('300', 500)).toEqual('Error: Both ingredientWeight and doughWeight must be numeric values');
});

test('must be numeric values.', () => {
    expect(bc.ingredientPercentage(300, '500')).toEqual('Error: Both ingredientWeight and doughWeight must be numeric values');
});

test('Must be a number', () => {
    expect(bc.ingredientPercentage(NaN, 500)).toEqual('Error: Nan');
});

test('Must be a number', () => {
    expect(bc.ingredientPercentage(200, NaN)).toEqual('Error: Nan');
});

test('40% of water with 500g flour to equal 200g', () => {
    expect(bc.ingredientWeight(40, 500)).toBe(200);
});

test('2% of salt with 1000g flour to equal 20g', () => {
    expect(bc.ingredientWeight(2, 1000)).toBe(20);
});

test('ingredientPercent must be a number', () => {
    expect(bc.ingredientWeight('300', 0)).toEqual('Error: Both ingredientPercent and doughWeight must be numeric values.');
});

test('doughWeight must be a number', () => {
    expect(bc.ingredientWeight(200, '0')).toEqual('Error: Both ingredientPercent and doughWeight must be numeric values.');
});

test('0.4% of salt with 500g flour to equal 2g', () => {
    expect(bc.ingredientWeight(0.4, 500)).toEqual(2);
});

test('doughWeight must be a higher than zero', () => {
    expect(bc.ingredientWeight(200, 0)).toEqual('Error: doughWeight must be higher than zero.');
});

test('doughWeight must be a higher than zero', () => {
    expect(bc.ingredientWeight(200, NaN)).toEqual('Error: Nan');
});

test('doughWeight must be a higher than zero', () => {
    expect(bc.ingredientWeight(NaN, 500)).toEqual('Error: Nan');
});