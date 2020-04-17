
exports.up = function(knex, Promise) { 
    return knex.schema.createTable('tasks', tbl => { 
        tbl.integer('id', 255).primary(); // guuid - shortid 
        tbl.string('project_id', 255).references('id').inTable('projects').notNullable(); 
        tbl.string('description', 255).notNullable(); 
        tbl.string('notes', 255);  
        tbl.boolean('completed').defaultTo(false); 
        tbl.timestamps(true, true); 
    }) 
}; 

exports.down = function(knex, Promise) { 
    return knex.schema.dropTableIfExists("tasks") 
}; 

