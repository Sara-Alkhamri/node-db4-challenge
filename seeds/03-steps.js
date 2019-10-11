
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {instructions: 'Add refried beans and water to skillet and stir until combined', recipe_id: 1},
        {instructions: 'Add cheese and bake for 15 minutes', recipe_id: 1},
        {instructions: 'Add salt as desired', recipe_id: 1}
      ]);
    });
};
