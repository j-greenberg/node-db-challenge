
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.integer('id', 255).primary(); 
            tbl.string('name', 255).notNullable(); 
            tbl.string('description', 255); 
            tbl.boolean('completed').defaultTo(false); 
            tbl.timestamps(true, true); 
        })
};

exports.down = function(knex, Promise) {
    return knex.schema    
    .dropTableIfExists("projects"); 
};
