
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'type knex:seed make 01_tasks', notes: 'tasky task', completed: false},
        {id: 2, description: 'type knex:seed run', notes: 'another task'},
        {description: 'watch the magic happen', notes: 'this is a note'}
      ]);
    });
};
