
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('resources').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'computer', description: 'machine used for learning'},
        {name: 'webcam', description: 'device used for teleconferencing'},
        {name: 'keyboard', description: 'used for coding'}
      ]);
    // });
};
