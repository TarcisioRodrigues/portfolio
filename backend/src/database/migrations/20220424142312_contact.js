/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('contact', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('subject').notNullable();
    table.string('email').notNullable();
    table.string('message').notNullable();
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('contact');
};
