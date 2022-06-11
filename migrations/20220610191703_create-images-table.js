exports.up = function (knex) {
  return knex.schema.createTable('images', (table) => {
    table.increments('id')
    table.string('filename')
    table.date('date')
    table.string('title')
    table.text('description')
    table.string('tags')
    table.boolean('starred')
    table.integer('views')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('images')
}
