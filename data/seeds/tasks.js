
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'open VSC', notes: 'click on VSC'},
        {project_id: 1, description: 'open folder', notes: 'select folder'},
        {project_id: 1, description: 'create data folder'},
        {project_id: 1, description: 'create index.js file'}
      ]);
    });
};
