
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Create database', description: 'make that database', completed: true},
        {id: 2, name: 'Create tables', description: 'make them tables'},
        {id: 3, name: 'Create columns', description: 'make those columns', completed: false}
      ]);
    });
};
