
exports.up = function(knex) {
    return knex.schema
        .createTable('Projects', tbl => {
            tbl.string('Id', 255).primary(); 
            tbl.string('Name', 255).notNullable(); 
            tbl.string('Description', 255); 
            tbl.boolean('Completed', false); 
            tbl.timestamps(); 
        })
        .createTable('Tasks', tbl => {
            tbl.string('Id', 255).primary(); 
            tbl.string('project_id', 255).notNullable().references('Id').inTable('Projects'); 
            tbl.string('Description', 255).notNullable(); 
            tbl.string('Notes', 255); 
            tbl.boolean('Completed', false); 
            tbl.timestamps(); 
        })
        .createTable('Resources', tbl => {
            tbl.string('Id', 255).primary(); 
            tbl.string('Name', 255).notNullable(); 
            tbl.string('Description', 255); 
        })
        .createTable('Project_Resources', tbl => {
            tbl.string('resources_id', 255).notNullable.references('Id').inTable('Resources'); 
            tbl.string('project_id', 255).notNullable.references('Id').inTable('Projects'); 
        })
};

exports.down = function(knex) {
    return knex.schema    
    .dropTableIfExists("Project_Resources")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Projects")
};
