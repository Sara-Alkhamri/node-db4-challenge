const db = require('./data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions

};

function getRecipes() {
    return db('recipes');
}

function getShoppingList() {
    return db('recipes');
}

function getInstructions() {
    return db('recipes')
    .select('steps')
    .where({id});
}