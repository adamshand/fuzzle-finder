/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('photos', (table) => {
    table.string('id')
    table.date('date')
    table.string('title')
    table.string('tags')
    table.boolean('starred')
    table.integer('views')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('photos')
}
