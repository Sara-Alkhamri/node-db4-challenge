
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 13, quantity: 1},
        {recipe_id: 1, ingredient_id: 17, quantity: 2},
        {recipe_id: 2, ingredient_id: 17, quantity: 3},
      ]);
    });
};
