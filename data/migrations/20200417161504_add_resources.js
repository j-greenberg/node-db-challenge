
exports.up = function(knex, Promise) { 
    return knex.schema.createTable('resources', tbl => { 
        tbl.integer('id', 255).primary(); // guuid - shortid 
        tbl.string('name', 255).notNullable(); 
        tbl.string('description', 255);  
        tbl.timestamps(true, true); 
    }) 
}; 

exports.down = function(knex, Promise) { 
    return knex.schema.dropTableIfExists("resources");  
}; 

