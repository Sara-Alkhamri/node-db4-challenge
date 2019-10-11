
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Nachos'},
        {recipe_name: 'Falafel Sandwich'},
        {recipe_name: 'Mac and Cheese'}
      ]);
};
