
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Refried Beans', measurement_unit: 'ounces'},
        {ingredient_name: 'Cheese', measurement_unit: 'grams'},
        {ingredient_name: 'Salt', measurement_unit: 'teaspoon'}
      ]);
    });
};
