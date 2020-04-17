

exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.integer('id', 255).primary(); 
            tbl.string('name', 255).notNullable(); 
            tbl.string('description', 255); 
            tbl.boolean('completed', false); 
            tbl.timestamps(); 
        })
        .createTable('tasks', tbl => {
            tbl.integer('id', 255).primary(); 
            tbl.string('project_id', 255).references('id').inTable('projects'); 
            tbl.string('description', 255).notNullable(); 
            tbl.string('notes', 255); 
            tbl.boolean('completed', false); 
            tbl.timestamps(); 
        })
        .createTable('resources', tbl => {
            tbl.integer('id', 255).primary(); 
            tbl.string('name', 255).notNullable(); 
            tbl.string('description', 255); 
        })
        .createTable('project_resources', tbl => {
            tbl.integer('resources_id', 255).notNullable().references('id').inTable('resources'); 
            tbl.integer('project_id', 255).notNullable().references('id').inTable('projects'); 
            tbl.primary(['resources_id', 'project_id']);
        });
};

exports.down = function(knex, Promise) {
    return knex.schema    
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects"); 
};
