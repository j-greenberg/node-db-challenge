
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'computer', description: 'machine used to make stuff'},
        {name: 'pencil', description: 'a thingy used to write'},
        {name: 'ide', description: 'integrated development environment'}
      ]);
    });
};
