
exports.seed = function(knex) {
  // Deletes ALL existing entries
  //return knex('projects').del()
//    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Create database', description: 'make that database'},
        {name: 'Create tables', description: 'make them tables'},
        {name: 'Create columns', description: 'make those columns'}
      ]);
  //  });
};
