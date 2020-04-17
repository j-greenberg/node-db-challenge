exports.up = function(knex, Promise) { 
    return knex.schema.createTable('project_resources', tbl => { 
        tbl.integer('id', 255).primary(); // guuid - shortid 
        tbl.string('project_id', 255).references('id').inTable('projects').notNullable(); 
        tbl.string('resources_id', 255).references('id').inTable('resources').notNullable(); 
        tbl.timestamps(true, true); 
    }) 
}; 

exports.down = function(knex, Promise) { 
    return knex.schema.dropTableIfExists("project_resources") 
}; 

